import {render} from 'react-dom';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import MainLayout from './components/mainLayout.jsx';
import ExVisibility from './components/exVisibility.jsx';
import ExGridEdit from './components/exGridEdit.jsx';
import ExGridView from './components/exGridView.jsx';
import ExGridViewRow from './components/exGridView.jsx';
import Back from './components/back.jsx';

render(
    <Router>
        <MainLayout/>
    </Router>, document.getElementById('root'));