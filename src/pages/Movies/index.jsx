import React, { useEffect, useState } from "react";
import { moviesURL } from "../../constant/endpoints";
import axios from "axios";
import Card from "../../components/Card";
import Genres from "../../components/Genres/index";
import "./styles.css";
import { motion, AnimatePresence } from "framer-motion";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [filterText, setFilterText] = useState("");

  //feth Movies
  let fetchMovies = async () => {
    try {
      const { data } = await axios.get(moviesURL);
      setMovies(data.results);
      setMoviesFiltered(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (filterText.length) {
      let filtered = movies?.filter((item) =>
        item.title.toLowerCase().includes(filterText)
      );
      setMoviesFiltered(filtered);
    } else {
      setMoviesFiltered(movies);
    }
  }, [filterText]);

  return (
    <>
      <div className="genre-input">
        <form>
          <input
            type="search"
            className="search-input"
            placeholder="Search a movie..."
            value={filterText}
            onChange={(e) =>
              setFilterText(e.target.value.toString().toLowerCase())
            }
          />
        </form>
        <Genres setMoviesFiltered={setMoviesFiltered} movies={movies} />
      </div>

      <motion.div layout className="movie-container">
        <AnimatePresence>
          {moviesFiltered?.length == 0 ? (
            <p className="notfound">Not Found</p>
          ) : (
            moviesFiltered?.map((item) => {
              return <Card key={item.id} movie={item} />;
            })
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Movies;
