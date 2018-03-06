import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <ul>
                <li>
                    <span className='NavBar-welcome'>{props.user.name}'s Profile</span>
                </li>
                <li>
                    <Link to='/selfeval' className='NavBar-link'>SELF EVALUATION </Link>
                </li>
                <li>
                    <Link to='/dashboard' className='NavBar-link'>DASHBOARD</Link>
                </li>
                <li>
                    <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
                </li>
            </ul>
        </div>
        :
        <div>
            <ul>
                <li>
                    <Link to='/login' className='NavBar-link'>LOG IN</Link>
                </li>
                <li>
                    <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
                </li>
            </ul>
        </div>;


    return (
        <Navbar brand='Inlite' right fixed>
            {nav}
        </Navbar>
    );
};

export default NavBar;