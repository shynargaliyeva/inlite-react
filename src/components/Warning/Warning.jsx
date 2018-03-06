import React from 'react';
import './Warning.css'

const Warning = ({selectedMovie}) => {
    return (
        <div>
            <div className='Warning-text'>
                <h4>Who should not watch this movie</h4>
                <div className='p4'>
                    <p>{selectedMovie.warning}</p>
                </div>
            </div>
        </div>
    )
}

export default Warning; 