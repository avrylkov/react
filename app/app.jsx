import {render} from 'react-dom';
import React from 'react';
import {
    BrowserRouter,
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
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/exVisibility">Скрывать, делать не доступными контролы</Link></li>
                <li><Link to="/exGridEdit">Редактирование данных в Таблице</Link></li>
                <li><Link to="/exGridView">Просмотр данных в Таблице</Link></li>
            </ul>
            <hr/>

            <Route path="/" component={MainLayout}/>
            <Route path="/exVisibility" component={ExVisibility}/>
            <Route path="/exGridEdit" component={ExGridEdit}/>
            <Route path="/exGridView" component={ExGridView}/>
            <Route path="/exGridViewRow/:id" component={ExGridViewRow}/>

        </div>
    </BrowserRouter>, document.getElementById('root'));