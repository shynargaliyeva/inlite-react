import React, { Component } from 'react';
import './DashboardPage.css';
import MovieList from '../../components/MovieList/MovieList';
import NavBar from '../../components/NavBar/Navbar';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMovie: null,
        }
    }

    handleSelectMovie = (id) => {
        this.setState({
            selectedMovie: this.props.movies.find(m => m._id === id),
        });
    }

    render () {
        let movies;
        if (this.props.depScore === null || this.props.depScore <= 4) {
            movies = this.props.movies;
        } else if (this.props.depScore >= 7) {
            movies = this.props.movies.filter(m => m.levelThree);
        } else {
            movies = this.props.movies.filter(m => m.levelOne && m.levelTwo);
        }
        return (
            <div className="DashboardPage">
                <NavBar
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <div className="MovieDetails">
                    {this.state.selectedMovie && <MovieDetails selectedMovie={this.state.selectedMovie} /> } 
                </div>
                <div className='vertical-center flex-center-center'>
                    <MovieList 
                        movies={movies}
                        handleSelectMovie={this.handleSelectMovie}
                        selectedMovie={this.state.selectedMovie}
                    />
                </div>
            </div>
        )
    }
}


export default DashboardPage;