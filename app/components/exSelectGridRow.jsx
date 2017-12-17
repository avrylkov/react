import React from 'react';
import {DataProvider} from './dataProvider.jsx';

/*--------------- GridRow ----------------------*/
class GridRow extends React.Component {
    constructor(props) {
        super(props);
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent(e) {
      this.props.onSelectRow(e, this.props.record);
    }

    render() {
        let record = this.props.record;
        return (
            <tr onClick={this.clickEvent}  className={this.props.edit && "selectRow" || !this.props.edit && ""}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.edit}</td>
            </tr>
        )
    }
}

/* ------------- ExSelectGridRow ----------------- */
export default class ExSelectGridRow extends React.Component {
    constructor() {
        super();
        this.state = {
            records:[]
        }

        this.selectRow = this.selectRow.bind(this);
    }

    componentDidMount() {
        this.setState({
            records: DataProvider.all()
        })
    }

    selectRow(e, record) {
        let records = this.state.records;
        records.forEach(r =>
            {
             r.edit = false;
             if (r.id == record.id) {
                 r.edit = true;
                 console.log("select="+record.id);
             }
            }
        )
        this.setState({records: records});
        console.log(record.id);
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
                        <th>Статус</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.records.map((record, index)=>{
                        return <GridRow record={record}
                                        key={index}
                                        index={index}
                                        onSelectRow={this.selectRow}
                        />
                    })}
                    </tbody>
                </table>

            </div>
        );
    }
}

