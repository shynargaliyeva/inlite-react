import React from 'react';
import './SelfEval.css';

const SelfEval = ({selfEval}) => {
    return (
        <div className="SelfEval-list">
            {selfEval.map((se, idx) => (
                <div key={idx}>{se.depScore}</div>
            ))}
        </div> 
    )
}


export default SelfEval;