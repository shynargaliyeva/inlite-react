import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.css';
import userService from '../utils/userService';
import LandingPage from '../pages/LandingPage/LandingPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SelfEvaluation from '../pages/SelfEvaluationPage/SelfEvaluation';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
// import NavBar from './NavBar/Navbar';

class App extends Component {
    constructor(props) {
        super();
        this.state = {

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
    }

    render () {
        return (
            <div className='App'>
                <header className='header-footer'>INLITE</header>
                <br/>
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

                        <Route exact path='/dashboard' render={() => (
                            userService.getUser() ?
                                <DashboardPage 
                                    user={this.state.user}
                                    handleLogout={this.handleLogout}
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