import React from 'react';
import {DataProvider} from './dataProvider.jsx';

class InputSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onInputChange(e.target.value);
    }

    render() {
        return (
            <div><span>Имя</span>
                <input value={this.props.label} onChange={this.handleChange}></input>
            </div>
        );
    }
}

class SearchTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const filteredRows = [];
        this.props.filteredData.forEach(function (item) {
            filteredRows.push(<tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={item.edit ? "https://avrylkov.github.io/react/img/emotion_tongue.png" :
                    "https://avrylkov.github.io/react/img/bg052.gif"}/></td>
                </tr>);
        });

        return (
            <table cellSpacing="5" cellPadding={5} adding="10" border="1">
                <thead>
                   <tr>
                       <th>Ид</th>
                       <th>Имя</th>
                       <th>Статус</th>
                   </tr>
                </thead>
                <tbody>
                {filteredRows}
                </tbody>
            </table>
        );
    }
}

export default class ExFilterTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {search: '', filteredData: []};
    }

    componentDidMount() {
        this.setState({
            filteredData: DataProvider.all()
        })
    }

    handleInputChange(value) {
        this.setState({search: value});
        const data = DataProvider.filterData(value);
        this.setState({
            filteredData: data,
            selectLabel: value
        });
    }

    render() {
        return (
            <div>
                <h3>Фильтр в Table</h3>
                <div>
                    <InputSearch
                        label={this.state.selectLabel}
                        onInputChange={this.handleInputChange}/>
                </div>
                <div>
                    <SearchTable
                        filteredData={this.state.filteredData}
                        onSelectChange={this.handleListSelect}/>
                </div>
            </div>
        );
    }
}
