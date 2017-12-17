import {render} from 'react-dom';
import React from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import ExVisibility from './components/exVisibility.jsx';
import ExGridEdit from './components/exGridEdit.jsx';
import ExGridView from './components/exGridView.jsx';
import ExGridViewRow from './components/exGridViewRow.jsx';
import ExFilterSelect from './components/exFilterSelect.jsx';

render(
    <BrowserRouter>
        <div>
            <h1>How to do React Js</h1>
            <div>
            <div className="box left">
            <ul>
                <li><Link to="/exVisibility">Скрывать, делать не доступными контролы</Link></li>
                <li><Link to="/exGridEdit">Редактирование данных в Таблице</Link></li>
                <li><Link to="/exGridView">Просмотр данных в Таблице</Link></li>
            </ul>
            </div>

            <div className="box left">
                <ul>
                    <li><Link to="/exFilterSelect">Фильтр в Select</Link></li>
                </ul>
            </div>
            </div>

            <hr className="clear"/>

            <main>
                <Switch>
                    <Route path="/exVisibility" component={ExVisibility}/>
                    <Route path="/exGridEdit" component={ExGridEdit}/>
                    <Route path="/exGridView" component={ExGridView}/>
                    <Route path="/exGridViewRow/:id" component={ExGridViewRow}/>
                    <Route path="/exFilterSelect" component={ExFilterSelect}/>
                </Switch>
            </main>

        </div>
    </BrowserRouter>, document.getElementById('root'));