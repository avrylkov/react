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
            <div>
            <input value={this.props.label} onChange={this.handleChange}></input>
            <span>ИД:{this.props.id}</span>
            </div>
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
            <select className="box" size={10} onChange={this.handleSelect}>
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
        const data = DataProvider.filterData(value);
        this.setState({
            filteredData: data,
            selectLabel: value
        });
    }

    handleListSelect(value, label) {
        console.log(value +", " + label);

        this.setState(
            {
                selectId: value,
                selectLabel: label
            });
    }

    render() {
        return (
            <div>
                <h3>Фильтр в Select</h3>
                <div>
                    <InputSearch
                        label={this.state.selectLabel}
                        id={this.state.selectId}
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
