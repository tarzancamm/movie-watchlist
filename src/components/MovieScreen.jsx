import React from 'react'

import MovieCard from './MovieCard'


const MovieScreen = ({movieList, page, setPage, watchlist, addMovie, removeMovie}) => {

    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie} watchlist={watchlist} addMovie={addMovie} removeMovie={removeMovie} >{movie.original_title}</MovieCard>
    })

    const decrement = () => setPage(page - 1)

    const increment = () => setPage(page + 1)

    return (
        <div className='page'>
            <h1>Cam's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className='btn-container'>
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen