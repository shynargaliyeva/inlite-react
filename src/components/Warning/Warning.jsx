import React from 'react';
import './Warning.css'

const Warning = ({selectedMovie}) => {
    return (
        <div>
            <div className='Warning-text'>
                <h4>Who should not watch this movie</h4>
                <p className='p4'>{selectedMovie.warning}</p>
            </div>
        </div>
    )
}

export default Warning; 