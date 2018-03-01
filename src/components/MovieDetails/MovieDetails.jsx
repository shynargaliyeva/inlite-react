import React from 'react';
import './MovieDetails.css';


const MovieDetails = ({movies}) => {
    return (
        <div className="MovieDetails-grid">
            { movies.map((movie, idx) => (
                <div>
                    <img className ="Movie-image" src={movie.image} />
                    <p className="Movie-title">{movie.title}</p>
                </div>
            ))}
        </div>
    )
}

export default MovieDetails;