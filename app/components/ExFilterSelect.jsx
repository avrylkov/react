import React from 'react';
import {DataProvider} from './dataProvider.jsx';

function filterData(value) {
    const rows = [];
    DataProvider.all().forEach(function (item) {
        if (item.name.toUpperCase().indexOf(value.toUpperCase()) != -1) {
            rows.push(item);
        }
    });
    return rows;
}

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
            <input value={this.props.label} onChange={this.handleChange}></input>
        );
    }
}

class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e) {
        let index = e.nativeEvent.target.selectedIndex;
        let text = e.nativeEvent.target[index].text;

        this.props.onSelectChange(e.target.value, text);
    }

    render() {
        const filteredRows = [];
        this.props.filteredData.forEach(function (item) {
            filteredRows.push(<option value={item.id} key={item.id}>{item.name}</option>);
        });

        return (
            <select size={10} onChange={this.handleSelect}>
                {filteredRows}
            </select>
        );
    }
}

export default class ExFilterSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleListSelect = this.handleListSelect.bind(this);
        this.state = {search: '', selectId: '', filteredData: []};
    }

    componentDidMount() {
        this.setState({
            filteredData: DataProvider.all()
        })
    }

    handleInputChange(value) {
        this.setState({search: value});
        const data = filterData(value);
        this.setState({
            filteredData: data,
            selectLabel: value
        });
    }

    handleListSelect(value, label) {
        this.setState(
            {
                selectId: value,
                selectLabel: label
            });
    }

    render() {
        return (
            <div>
                <div>
                    <InputSearch
                        label={this.state.selectLabel}
                        onInputChange={this.handleInputChange}/>
                </div>
                <div>
                    <SearchList
                        filteredData={this.state.filteredData}
                        onSelectChange={this.handleListSelect}/>
                </div>
            </div>
        );
    }
}
