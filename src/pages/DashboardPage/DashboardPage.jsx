import React from 'react';
import './DashboardPage.css';
import NavBar from '../../components/NavBar/Navbar';


const DashboardPage = (props) => {
    return (
        <div className='DashboardPage'>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />   
            <h3>Movie Details</h3>  
            <p>You must be logged in to see this! (protected route) </p>
            <h4>Psychology</h4>
            <h4>Instructions</h4>
            <h4>Warning</h4>
            <hr/>
            <p>Movie grid</p>
        </div>
    )
}

export default DashboardPage;