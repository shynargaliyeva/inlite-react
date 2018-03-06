import React from 'react';
import './MovieDetails.css';
import { Tabs, Tab } from 'react-materialize';
import Instructions from '../Instructions/Instructions';
import Psychology from '../Psychology/Psychology';
import Warning from '../Warning/Warning';


const MovieDetails = (props) => {
    return (
        <div className="MovieDetails">
            <h1>Movie Details</h1>
            <div className="MovieDetails-image">
                <img className="SelectedMovie-image" alt="Movie poster" src={props.selectedMovie.image} />
            </div>
            <div className='Movie-tab'>
                <Tabs className='tab-MovieDetails'>
                    <Tab title="Movie">
                        <div className='Movie-div'>
                            <div className="mainDetails">
                                <span className='p1'>{props.selectedMovie.title}</span><br/>
                                <span className='span2'>{props.selectedMovie.genre} | {props.selectedMovie.runtime} | {props.selectedMovie.rating}</span>
                            </div>
                            <div>
                                <p className='p2'>{props.selectedMovie.psychologist}</p>
                            </div>
                            <div>
                                <p className='p3'>{props.selectedMovie.synopsis}</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Instructions" active><Instructions /></Tab>
                    <Tab title="Psychology">
                         <Psychology selectedMovie={props.selectedMovie} />
                    </Tab>
                    <Tab title="Warning"><Warning selectedMovie={props.selectedMovie}/></Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default MovieDetails;