import React, { Component } from 'react';
import './DashboardPage.css';
import MovieList from '../../components/MovieList/MovieList';
import NavBar from '../../components/NavBar/Navbar';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
// import { Route } from 'react-router-dom';

class DashboardPage extends Component {
    constructor() {
        super();
        this.state = {
            selectedMovie: null,
        }
    }

    handleSelectMovie = (id) => {
        this.setState({
            selectedMovie: this.props.movies.find(m => m._id === id),
            // setState to filtered movies
        })
    }

    render () {
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
                        movies={this.props.movies}
                        handleSelectMovie={this.handleSelectMovie}
                        selectedMovie={this.state.selectedMovie}
                    />
                </div>
            </div>
        )
    }
}




export default DashboardPage;