import React, { Component } from 'react';
import './DashboardPage.css';
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import NavBar from '../../components/NavBar/Navbar';

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch("api/movies/dashboard")
            .then(res => res.json())
            .then(movies => this.setState({ movies }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="DashboardPage">
                <NavBar
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <MovieDetails 
                    movies={this.state.movies}
                />  
            </div>
        )
    }
}


// const DashboardPage = (props) => {
//     return (
//         <div className='DashboardPage'>
//             <NavBar
//                 user={props.user}
//                 handleLogout={props.handleLogout}
//             />   
//             <h3>Movie Details</h3>  
//             <p>You must be logged in to see this! (protected route) </p>
//             <h4>Psychology</h4>
//             <h4>Instructions</h4>
//             <h4>Warning</h4>
//             <hr/>
//             <p>Movie grid</p>
//         </div>
//     )
// }

export default DashboardPage;