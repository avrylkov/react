import React from 'react';
import {DataProvider} from './dataProvider.jsx';

class ButtonSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onButtonClick(e.target);
    }

    render() {
        return (
            <span>
                &nbsp;<button onClick={this.handleClick}>Искать!</button>
            </span>
        );
    }

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
            <span>Имя &nbsp;
                <input value={this.props.label} onChange={this.handleChange}></input>
            </span>
        );
    }
}

class SearchTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                {this.props.filteredData.map(function (item) {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><img src={item.edit ? "https://avrylkov.github.io/react/img/emotion_tongue.png" :
                            "https://avrylkov.github.io/react/img/bg052.gif"}/></td>
                    </tr>
                })}
                </tbody>
            </table>
        );
    }
}

export default class ExFilterTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonSearch = this.handleButtonSearch.bind(this);
        this.state = {search: '', selectLabel: '', filteredData: []};
    }

    componentDidMount() {
        this.setState({
            filteredData: DataProvider.all()
        })
    }

    handleInputChange(value) {
        this.setState({selectLabel: value});
    }

    handleButtonSearch(target) {
        let value = this.state.selectLabel;
        this.setState({search: value});
        let data = DataProvider.filterData(value);
         this.setState({
         filteredData: data
         });
    }

    render() {
        return (
            <div>
                <h3>Фильтр в Table</h3>
                <div><a target="_blank" href="https://github.com/avrylkov/react/blob/master/app/components/exFilterTable.jsx">GitHub</a></div>
                <div>
                    <InputSearch
                        label={this.state.selectLabel}
                        onInputChange={this.handleInputChange}/>
                    <ButtonSearch
                        onButtonClick={this.handleButtonSearch}/>
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
