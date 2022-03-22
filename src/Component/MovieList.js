import React, { useState } from "react";
import { MovieData } from "../constant/Data";
import MovieCard from "./MovieCard";
import Add from "./Add";
const MovieList = ({ input }) => {
  const [movie, setMovie] = useState(MovieData);
  const addMovie = (newMovie) => {
    setMovie([...movie, newMovie]);
  };
  return (
    <>
      <Add addmovie={addMovie} />
      <div className="liste">
        {movie
          .filter((el) => el.title.toUpperCase().includes(input.toUpperCase()))
          .map((film) => (
            <MovieCard lista={film} />
          ))}
      </div>
    </>
  );
};

export default MovieList;
