import React from 'react';
// import {Link} from 'react-router-dom';
import './LandingPage.css';
import NavBar from '../../components/NavBar/Navbar';
// import { Row, Col } from 'react-materialize';


const LandingPage = (props, movies) => {
    return (
    <div className='LandingPage'>
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
        />   
        <div className='vertical-center flex-center-center'>
            <div className="LandingPage-tagline">Watch Movies for good</div>
        </div>
    </div>
       
    )
}

export default LandingPage;