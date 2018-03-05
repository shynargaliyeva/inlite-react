import React from 'react';
import './Psychology.css';

const Psychology = ({selectedMovie}) => {
    return (
        <div>
            <div className='Psychology-text'>
                <h4>Why this movie is recommended?</h4>
                <p className='p4'>{selectedMovie.recommend}</p>
            </div>
        </div>
    )
}

export default Psychology;