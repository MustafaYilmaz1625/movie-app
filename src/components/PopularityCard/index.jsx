import React from "react";
import { IMGPATH, img_url } from "../../constant/endpoints";
import "./styles.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Card = ({ movie }) => {
  const id = movie.id;

  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      className="movie"
    >
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
        <div>
          <Link to={`/view2/${id}`} className="btn">
            View
          </Link>
        </div>
        <h2>Overview:</h2>
        <p>{movie.overview}</p>
      </div>
    </motion.div>
  );
};

export default Card;
