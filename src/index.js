import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './modules/App/App';

import Amplify from 'aws-amplify';
import awsconfig from 'aws-exports';
Amplify.configure(awsconfig);

// render the main app at the root div element
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
