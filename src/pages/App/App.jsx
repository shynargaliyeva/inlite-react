import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import LandingPage from '../LandingPage/LandingPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from  '../LoginPage/LoginPage';
import SelfEvaluation from '../SelfEvaluationPage/SelfEvaluation';
import DashboardPage from '../DashboardPage/DashboardPage';
// import NavBar from './NavBar/Navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            depScore: null
        }
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    }

    handleSignup = () => {
        this.setState({ user: userService.getUser() });
    }

    handleLogin = () => {
        this.setState({ user: userService.getUser() });
    }

    /*------- Lifecycle Methods -------*/

    componentDidMount() {
        let user = userService.getUser();
        this.setState({user});

        fetch('/api/movies/dashboard')
            .then(res => res.json())
            .then(movies => this.setState({ movies }))
            .catch(err => console.log(err))
    }

    render () {
        return (
            <div className='App'>
                <Switch>
                    <Route exact path='/' render={() => 
                        <LandingPage 
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                        /> 
                    }/>
                    <Route exact path='/signup' render={(props) =>
                        <SignupPage {...props}
                            handleSignup={this.handleSignup}
                        />
                    } />
                    <Route exact path='/login' render={(props) =>
                        <LoginPage {...props}
                            handleLogin={this.handleLogin}
                        />
                    } />
                    <Route exact path='/selfeval' render={() => (
                        userService.getUser() ?
                            <SelfEvaluation 
                                user={this.state.user}
                                handleLogout={this.handleLogout}
                            />
                        :
                            <Redirect to='/login' />
                    )} />

                    <Route exact path='/dashboard' render={(props) => (
                        userService.getUser() ?
                            <DashboardPage 
                                user={this.state.user}
                                handleLogout={this.handleLogout}
                                movies={this.state.movies}
                                handleSelectMovie={this.handleSelectMovie}
                            />
                        :
                            <Redirect to='/' />
                    )} />
                </Switch>
            </div>
        );
    }
}

export default App;