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
            <tr onClick={this.clickEvent}  className={record.edit ? "selectRow" : ""}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.edit ? ":-)" : "("}</td>
            </tr>
        )
    }
}

/* ------------- ExSelectGridRow ----------------- */
export default class ExSelectGridRow extends React.Component {
    constructor() {
        super();
        this.state = {
            selectId: null,
            records: []
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
             }
            }
        )
        this.setState({records: records, selectId: record.id});
    }

    render() {
        return (
            <div>
                <h3>Выделение по Click</h3>
                <div><a target="_blank" href="https://github.com/avrylkov/react/blob/master/app/components/exSelectGridRow.jsx">GitHub</a></div>
                <span>ИД:{this.state.selectId}</span>
                <table border={1} cellSpacing={2} cellPadding={5}>
                    <thead>
                    <tr>
                        <th>ИД</th>
                        <th>Имя</th>
                        <th>Статус</th>
                    </tr>
                    </thead>
                    <tbody className="selectInTable">
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

