import React from 'react';
import './Instructions.css';

const Instructions = (props) => {
    return (
        <div className='Instructions'>
            <h3>PREP</h3>
            <span className='Instructions-p1'>while you're watching the movie</span><br/>
            <span className='span1'>take notes on</span>
            <div className='Instrustions-list'>
                <ul className='ul1'>
                    Scenes that trigger your past memories
                </ul>
                <ul className='ul1'>
                    Things you like or dislike in the movie
                </ul>
                <ul className='ul1'>
                    Emotions(be specific) and what triggers them
                </ul>
            </div>
            <div>
                <p className='Instructions-p1'>After the movie</p>
                <h5>complete exercises with Inlite chatbot</h5>
            </div>
        </div>
    )
}

export default Instructions;