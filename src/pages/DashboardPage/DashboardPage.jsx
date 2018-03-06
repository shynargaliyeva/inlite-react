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
            filteredMovies: [],
            depScore: props.depScore
        }
    }

    setFilteredMovies() {
        if (this.state.depScore === null || this.state.depScore <= 4) {
            this.setState({ filteredMovies: this.props.movies});
        } else if (this.state.depScore >= 7) {
            this.setState({ filteredMovies: this.props.movies.filter(m => m.levelThree)});
        } else {
            this.setState({ filteredMovies: this.props.movies.filter(m => m.levelOne && m.levelTwo)});
        }
    }

    handleSelectMovie = (id) => {
        this.setState({
            selectedMovie: this.props.movies.find(m => m._id === id),
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.depScore !== nextProps.depScore) {
            this.setState({
                depScore: nextProps.depScore
            }, this.setFilteredMovies);
        }
    }
    componentDidMount() {
        this.setFilteredMovies();
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
                        movies={this.state.filteredMovies}
                        handleSelectMovie={this.handleSelectMovie}
                        selectedMovie={this.state.selectedMovie}
                    />
                </div>
            </div>
        )
    }
}


export default DashboardPage;