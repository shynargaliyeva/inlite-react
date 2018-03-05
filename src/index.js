import React from 'react';
import { render } from 'react-dom';
import App from './pages/App/App';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

render (<Router><Route path='/' component={App}></Route></Router>, document.getElementById('root'))