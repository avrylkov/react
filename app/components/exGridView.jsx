import React from 'react';
import {Route, Link} from 'react-router-dom'
import {ExGridViewRow} from './exGridViewRow.jsx';
import {DataProvider} from './dataProvider.jsx';

function RecordView(props) {
    return <tr>
        <td><Link to={'/exGridViewRow/' + props.record.id}>{props.record.id}</Link>
            <img src={"https://avrylkov.github.io/react/img/edit.png"}/>
        </td>
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
                <h3>Редактирование из таблицы по ссылке</h3>
                <div><a href="https://github.com/avrylkov/react/blob/master/app/components/exGridView.jsx">GitHub</a></div>
                <table cellSpacing="5" cellPadding="10" border="1">
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
