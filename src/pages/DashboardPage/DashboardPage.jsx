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
            <h1>Movie Details</h1>
            <hr/>   
            <p>You must be logged in to see this! (protected route) </p>
        </div>
    )
}

export default DashboardPage;