import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { IMGPATH, img_url, moviesURL } from "../../constant/endpoints";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const View = ({}) => {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const { data } = await axios.get(moviesURL);
    const newMovie = data.results.find((item) => item.id === parseInt(id));

    setMovie(newMovie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <motion.div layout transition={{ duration: 1 }} className="movie">
      <img
        src={movie.poster_path ? IMGPATH + movie.poster_path : img_url}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className={`tag ${setVoteClass(movie.vote_average)}`}>
          {movie.vote_average}
        </span>
      </div>

      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{movie.overview}</p>
      </div>
    </motion.div>
  );
};

export default View;
