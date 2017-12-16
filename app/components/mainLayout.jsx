import React from 'react';
import {Link} from 'react-router-dom'

export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <h1>How to do React Js</h1>
                <main>
                    <Route path="/" component={MainLayout}/>
                    <Route path="/exVisibility" component={ExVisibility}/>
                    <Route path="/exGridEdit" component={ExGridEdit}/>
                    <Route path="/exGridView" component={ExGridView}/>
                    <Route path="/exGridViewRow/:id" component={ExGridViewRow}/>
                </main>

                <table>
                    <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li><Link to="/exVisibility">Скрывать, делать не доступными контролы</Link></li>
                                <li><Link to="/exGridEdit">Редактирование данных в Таблице</Link></li>
                                <li><Link to="/exGridView">Просмотр данных в Таблице</Link></li>
                            </ul>
                        </td>
                        <td>
                            {this.props.children}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

