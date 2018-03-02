import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({selectedMovie}) => {
    return (
        <div className="MovieDetails">
            <h1>Movie Details</h1>
            <p>{selectedMovie.title}</p>
            <p>{selectedMovie.genre}</p>
            <p>{selectedMovie.runtime}</p>
            <p>{selectedMovie.rating}</p>
            <p>{selectedMovie.synopsis}</p>
            <p>{selectedMovie.psychologist}</p>
        </div>
    )
}

export default MovieDetails;