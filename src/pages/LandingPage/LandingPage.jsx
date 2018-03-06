import React from 'react';
import './LandingPage.css';
import NavBar from '../../components/NavBar/Navbar';
// import {Button, Link} from 'react-materialize';


const LandingPage = (props, movies) => {
    return (
    <div className='LandingPage'>
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
        />   
        <div className='vertical-center flex-center-center'>
            <div className='LP-banner'>
                <img className='LP-img' src="https://i.imgur.com/aR2Sbzm.png" alt="Laptop mockup"/>
            </div>
            <div className="LP-tagline">
                <span className='LP-span1'>Watch Movies for</span><br/><span className='LP-span2'>good</span>
            </div>
            <div className='LP-button'>
                {/* <Link to='/signup'><Button waves="light" type="submit">GET STARTED</Button></Link> */}
            </div>

        </div>
    </div>
       
    )
}

export default LandingPage;