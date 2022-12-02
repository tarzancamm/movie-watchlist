import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from './components/Watchlist'

import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => {
    setWatchlist([...watchlist, movie])
  }

  const removeMovie = (movie) => {
    let newState = watchlist.filter(film => {
      return film !== movie
    })
    setWatchlist(newState)
  }

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen movieList={movieList} page={page} setPage={setPage} watchlist={watchlist} addMovie={addMovie} removeMovie={removeMovie} />
        <Watchlist watchlist={watchlist} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
