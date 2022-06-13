import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { GENRE_URL } from "../../constant/endpoints";

const Genres = ({ movies, setMoviesFiltered }) => {
  const [genres, setGenres] = useState([]);
  const [selectType, setSelectType] = useState("");

  const fetchGenres = async () => {
    const { data } = await axios.get(GENRE_URL);
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  // handle add
  const handleAddGenres = (genre) => {
    setSelectType(genre);

    let filtered = movies.filter((item) => item.genre_ids.includes(genre.id));
    setMoviesFiltered(filtered);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">Genres</button>
      <div className="dropdown-content">
        {genres.map((item) => {
          return selectType.id == item.id ? (
            <a
              href="#"
              style={{ backgroundColor: "#673AB7" }}
              onClick={() => handleAddGenres(item)}
              key={item.id}
            >
              {item.name}
            </a>
          ) : (
            <a href="#" onClick={() => handleAddGenres(item)} key={item.id}>
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Genres;
