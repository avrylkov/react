import React from 'react';
import {Route, Link} from 'react-router-dom'
import {ExGridViewRow} from './exGridViewRow.jsx';
import {DataProvider} from './dataProvider.jsx';

function RecordView(props) {
    return <tr>
        <td><Link to={'/exGridViewRow/' + props.record.id}>{props.record.id}</Link></td>
        <td>{props.record.name}</td>
    </tr>;
}

export default class ExGridView extends React.Component {
    constructor() {
        super();
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
                <h3>Таблица</h3>
                <table className="table table-condensed">
                    <thead>
                    <tr>
                        <th>ИД</th>
                        <th>Имя</th>
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
