import React from 'react';
import {Route, Link} from 'react-router-dom'
import {ExGridViewRow} from './exGridViewRow.jsx';
import {DataProvider} from './dataProvider.jsx';

function RecordView(props) {
    return <tr>
        <td><Link to={'/exGridViewRow/' + props.record.id}>{props.record.id}</Link></td>
        <td>{props.record.name}</td>
        <td style={props.record.edit ? {background: 'red'} : {background: ''}}>{props.record.edit ? 'Да' : 'Нет'}</td>
    </tr>;
}

export default class ExGridView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        }
    }

    componentDidMount() {
        this.setState({
            records: DataProvider.all()
        })
    }

    render() {
        return (
            <div>
                <h3>Редактирование из Таблицы по ссылке</h3>
                <table cellspacing="5" cellpadding="10" border="1">
                    <thead>
                    <tr>
                        <th>ИД</th>
                        <th>Имя</th>
                        <th>Статус</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.records.map((record, index) => {
                        return <RecordView record={record}
                                           key={index}
                               />
                        })}
                    </tbody>
                </table>

            </div>
        );
    }
}
