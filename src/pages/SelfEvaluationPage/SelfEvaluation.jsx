import React from 'react';
import './SelfEvaluationPage.css';


const SelfEvaluationPage = (props) => {
    return (
        <div className='SelfEvaluationPage'>
            <h3>Answer Self Evaluation Questions</h3>
            <ul>
                <li>Feeling nervous, anxious, on edge?</li>
                <li>Can't stop worrying?</li>
                <li>Feeling down, depressed, hopeless?</li>
                <li>No interest or pleasure in life?</li>
            </ul>
        </div>
    )
}

export default SelfEvaluationPage;