import React, { useEffect, useState } from "react";
import { popularityURL } from "../../constant/endpoints";
import axios from "axios";
import PopularityCard from "../../components/PopularityCard";
import "./styles.css";
import { motion } from "framer-motion";

const Popularity = () => {
  const [movies, setMovies] = useState([]);

  //feth Movies
  let fetchMovies = async () => {
    const { data } = await axios.get(popularityURL);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <motion.div layout className="movie-container">
      {movies?.map((item) => {
        return <PopularityCard key={item.id} movie={item} />;
      })}
    </motion.div>
  );
};

export default Popularity;
