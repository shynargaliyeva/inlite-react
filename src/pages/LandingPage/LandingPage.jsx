import React from 'react';
// import {Link} from 'react-router-dom';
import './LandingPage.css';
import NavBar from '../../components/NavBar/Navbar';
import { Row, Col } from 'react-materialize';


const LandingPage = (props, movies) => {
    return (
    <div className='LandingPage'>
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
        />   
        <h2>Watch Movies for good</h2>
        {/* <div className="LP-grid">
            {movies.map((movie, idx) => (
                <div>
                    <img className='LP-image' src={movie.image} />
                    <p className="LP-title">{}</p>
                </div>
            ))} */}
        
            {/* <Row>
                <Col s={1} className='grid-example'>1</Col>
                <Col s={1} className='grid-example'>2</Col>
                <Col s={1} className='grid-example'>3</Col>
                <Col s={1} className='grid-example'>4</Col>
                <Col s={1} className='grid-example'>5</Col>
                <Col s={1} className='grid-example'>6</Col>
                <Col s={1} className='grid-example'>7</Col>
                <Col s={1} className='grid-example'>8</Col>
                <Col s={1} className='grid-example'>9</Col>
                <Col s={1} className='grid-example'>10</Col>
                <Col s={1} className='grid-example'>11</Col>
                <Col s={1} className='grid-example'>12</Col>
            </Row> */}
        </div>
           
    // </div>
    )
}

export default LandingPage;