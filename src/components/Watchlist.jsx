import React from "react";

import MovieCard from "./MovieCard";

const Watchlist = ({ watchlist, removeMovie }) => {
  const movieDisplay = watchlist.map((movie) => {
    return <MovieCard movie={movie} id={movie.id} removeMovie={removeMovie} watchlist={watchlist} >{movie.original_title}</MovieCard>;
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
