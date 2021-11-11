import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = (props) => {
  return (
    <div>
      {props.movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
