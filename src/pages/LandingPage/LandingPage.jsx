import React from 'react';
// import {Link} from 'react-router-dom';
import './LandingPage.css';
import NavBar from '../../components/NavBar/Navbar';

const LandingPage = (props) => {
    return (
    <div className='LandingPage'>
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
        />   
        <h2>Watch Movies for good</h2>
    </div>
    )
}

export default LandingPage;