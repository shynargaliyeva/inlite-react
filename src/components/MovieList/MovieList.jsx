import React from 'react';
import './MovieList.css';


const MovieList = ({ movies, handleSelectMovie}) => {

    return (
        <div className="container">
            <div className="MovieList-grid">
                { movies.map((movie, idx) => (
                    <div key={idx} className="Movielist-movie" onClick={() => handleSelectMovie(movie._id)}>
                        <img className ="Movie-image" alt="Movie poster" src={movie.image} />
                        <p className="Movie-title">{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MovieList;