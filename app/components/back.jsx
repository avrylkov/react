import React from 'react';
import {Link} from 'react-router-dom'

export default class Back extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/back">Назад</Link></li>
                </ul>
            </div>
        );
    }
}
