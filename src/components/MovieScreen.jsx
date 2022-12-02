import React from 'react'

import MovieCard from './MovieCard'


const MovieScreen = ({movieList, page, setPage, watchlist, addMovie}) => {

    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie} addMovie={addMovie}>{movie.original_title}</MovieCard>
    })

    return (
        <div className='page'>
            <h1>Cam's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen