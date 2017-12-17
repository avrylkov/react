import React from 'react';
import {DataProvider} from './dataProvider.jsx';

class GridRecord extends React.Component {
    constructor() {
        super();
        this.nameChange = this.nameChange.bind(this);
        this.editChange = this.editChange.bind(this);
    }

    nameChange(e) {
        this.props.onNameChange(e.target.value, this.props.index);
    }

    editChange(e) {
        this.props.onEditChange(e.target.checked, this.props.index);
    }

    render() {
        let record = this.props.record;
        return (
            <tr>
                <td>{record.id}</td>
                <td><input type="text" value={record.name} onChange={this.nameChange} disabled={record.edit}/></td>
                <td><input type="checkbox" value={record.edit} onChange={this.editChange}/></td>
            </tr>
        )
    }
}

export default class ExGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            records:[]
        }

        this.nameChange = this.nameChange.bind(this);
        this.editChange = this.editChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            records: DataProvider.all()
        })
    }

    nameChange(newValue, index) {
        let records = this.state.records;
        records[index].name = newValue;
        this.setState({records: records});
    }

    editChange(newValue, index) {
        let records = this.state.records;
        records[index].edit = newValue;
        this.setState({records: records});
    }

    render() {
        return (
            <div>
                <h3>Таблица</h3>
                <table>
                    <thead>
                    <tr>
                        <th>ИД</th>
                        <th>Имя</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.records.map((record, index)=>{
                        return <GridRecord record={record}
                                           key={index}
                                           index={index}
                                           onNameChange={this.nameChange}
                                           onEditChange={this.editChange}
                                           />
                    })}
                    </tbody>
                </table>

            </div>
        );
    }
}
