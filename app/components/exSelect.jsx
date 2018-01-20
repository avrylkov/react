import React from 'react';
import {DataProvider} from './dataProvider.jsx';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleListSelect = this.handleListSelect.bind(this);
    }

    handleListSelect(e) {
      this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <select
                    value={this.props.value}
                    onChange={this.handleListSelect}>
                    {this.props.data.map(function (v) {
                        return <option value={v.id} key={v.id}>{v.name}</option>
                    })}
                </select>
            </div>
        );
    }

}


export default class ExSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleListSelect = this.handleListSelect.bind(this);
        this.state = {selectId: '200', data: []};
    }

    componentDidMount() {
        this.setState({
            data: DataProvider.all()
        })
    }

    handleListSelect(value) {
        console.log(value);

        this.setState(
            {
                selectId: value,
            });
    }

    render() {
        return (
            <div>
                <div><a target="_blank" href="https://github.com/avrylkov/react/blob/master/app/components/exSelect.jsx">GitHub</a></div>
                <div>
                    <span>ИД:</span>
                    <span><strong>id={this.state.selectId}</strong></span>
                </div>
                <div>
                    <Select
                        value={this.state.selectId}
                        onChange={this.handleListSelect}
                        data={this.state.data}>
                    </Select>
                </div>
            </div>
        );
    }

}

