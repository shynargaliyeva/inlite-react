import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            {/* <Link to='/topscores' className='NavBar-link' >TOP SCORES</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; */}
            <NavItem>
                <span className='NavBar-welcome'>{props.user.name}'s Profile</span>
            </NavItem>
            <NavItem>
                <Link to='/selfeval' className='NavBar-link'>SELF EVALUATION</Link>
            </NavItem>
            <NavItem>
                <Link to='/dashboard' className='NavBar-link'>DASHBOARD</Link>
            </NavItem>
            <NavItem>
                <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
            </NavItem>    
        </div>
        :
        <div>
            <NavItem>
                <Link to='/login' className='NavBar-link'>LOG IN</Link>
            </NavItem>
            <NavItem>
                <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
            </NavItem>
        </div>;


    return (
        <Navbar brand='Inlite' right>
            {nav}
        </Navbar>
    );
};


export default NavBar;