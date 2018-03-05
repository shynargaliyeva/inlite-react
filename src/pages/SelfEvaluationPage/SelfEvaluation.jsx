import React, { Component } from 'react';
import './SelfEvaluationPage.css';
import { Row, Input, Button } from 'react-materialize';
import NavBar from '../../components/NavBar/Navbar';
import tokenService from '../../utils/tokenService';
// import SelfEval from '../../components/SelfEval/SelfEval';

let questions = [
    "Feeling nervous, anxious, on edge?",
    "Can't stop worrying?",
    "Feeling down, depressed, hopeless?",
    "No interest or pleasure in life?"
]

class SelfEvaluationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            depScore: null,
            q1: null,
            q2: null,
            q3: null,
            q4: null,
            selfEval: []
        }
    }

    onChangeSelfEvalQ1 = (e) => {
        this.setState({ q1: e.target.value })
    }
    onChangeSelfEvalQ2 = (e) => {
        this.setState({ q2: e.target.value })
    }
    onChangeSelfEvalQ3 = (e) => {
        this.setState({ q3: e.target.value })
    }
    onChangeSelfEvalQ4 = (e) => {
        this.setState({ q4: e.target.value })
    }

    addSelfEval = (e) => {
        e.preventDefault();
        fetch('/api/users/selfeval', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tokenService.getToken()}` 
            },
            body: JSON.stringify({
                q1: this.state.q1,
                q2: this.state.q2,
                q3: this.state.q3,
                q4: this.state.q4
            })
        })
        .then(data => data.json())
        .then((evals) => {
            this.props.handleUpdatedSelfEvals(evals)
        })
        .catch(err => console.log(err))
    }
    /*------- Lifecycle Methods -------*/
    componentDidMount() {
        fetch('/api/users/selfeval')
            .then(res => res.json())
            .then(selfEval => {this.setState({ selfEval })})
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='SelfEvaluationPage'>
                <NavBar
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />  
                <div className="SelfEval-text">
                    <h3>Self Evaluation</h3>
                    <p className="flow-text">Over the past 2 weeks have you been bothered by these problems? <br/> 
                        Answering these question will help you track your progress</p>
                </div>
                <div className="container">
                    <div className="SelfEval-form">
                        <Row>
                            <Input className="selection" s={8} type='select' label={questions[0]} onChange={this.onChangeSelfEvalQ1} defaultValue='0'>
                                <option value={0}>Not At All</option>
                                <option value={1}>Some Days</option>
                                <option value={2}>Every Day</option>
                            </Input>
                        </Row>
                        <Row>
                            <Input s={8} type='select' label={questions[1]} onChange={this.onChangeSelfEvalQ2} defaultValue='0'>
                                <option value={0}>Not At All</option>
                                <option value={1}>Some Days</option>
                                <option value={2}>Every Day</option>
                            </Input>
                        </Row>
                        <Row>
                            <Input s={8} type='select' label={questions[2]} onChange={this.onChangeSelfEvalQ3} defaultValue='0'>
                                <option value={0}>Not At All</option>
                                <option value={1}>Some Days</option>
                                <option value={2}>Every Day</option>
                            </Input>
                        </Row>
                        <Row>
                            <Input s={8} type='select' label={questions[3]} onChange={this.onChangeSelfEvalQ4} defaultValue='0'>
                                <option value={0}>Not At All</option>
                                <option value={1}>Some Days</option>
                                <option value={2}>Every Day</option>
                            </Input>
                        </Row>
                            <div className="SelfEval-button">
                                <Button waves="light" type="submit" onClick={this.addSelfEval}>GET STARTED</Button>
                            </div>
                    </div>
                </div>
                {/* <div>
                    <SelfEval selfEval={this.state.selfEval} />
                </div> */}
            </div>
            // <div className='SelfEvaluationPage'>
            //     <NavBar
            //         user={this.props.user}
            //         handleLogout={this.props.handleLogout}
            //     />  
            //     <div className="SelfEval-text">
            //         <h3>Self Evaluation</h3>
            //         <p className="flow-text">Over the past 2 weeks have you been bothered by these problems? <br/> 
            //             Answering these question will help you track your progress</p>
            //     </div>
            //     <div className="container">
            //         <div className="SelfEval-form">
            //             <Row>
            //                 <Input s={8} type='select' label={questions[0]} onChange={this.onChangeSelfEvalQ1} defaultValue='0'>
            //                     <option value={0}>Not At All</option>
            //                     <option value={1}>Some Days</option>
            //                     <option value={2}>Every Day</option>
            //                 </Input>
            //             </Row>
            //             <Row>
            //                 <Input s={8} type='select' label={questions[1]} onChange={this.onChangeSelfEvalQ2} defaultValue='0'>
            //                     <option value={0}>Not At All</option>
            //                     <option value={1}>Some Days</option>
            //                     <option value={2}>Every Day</option>
            //                 </Input>
            //             </Row>
            //             <Row>
            //                 <Input s={8} type='select' label={questions[2]} onChange={this.onChangeSelfEvalQ3} defaultValue='0'>
            //                     <option value={0}>Not At All</option>
            //                     <option value={1}>Some Days</option>
            //                     <option value={2}>Every Day</option>
            //                 </Input>
            //             </Row>
            //             <Row>
            //                 <Input s={8} type='select' label={questions[3]} onChange={this.onChangeSelfEvalQ4} defaultValue='0'>
            //                     <option value={0}>Not At All</option>
            //                     <option value={1}>Some Days</option>
            //                     <option value={2}>Every Day</option>
            //                 </Input>
            //             </Row>
            //                 <div className="SelfEval-button">
            //                     <Button waves="light" type="submit" onClick={this.addSelfEval}>GET STARTED</Button>
            //                 </div>
            //         </div>
            //     </div>
            //     {/* <div>
            //         <SelfEval selfEval={this.state.selfEval} />
            //     </div> */}
            // </div>
        )
    }
 
}

export default SelfEvaluationPage;