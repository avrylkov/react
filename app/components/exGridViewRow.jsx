import React from 'react';
import {DataProvider} from './dataProvider.jsx';

export default class ExGridViewRow extends React.Component {
    render() {
        let id = this.props.match.params.id;
        let record = DataProvider.byId(id);
        return (<div>{record.id + ', ' + record.name}</div>)
    }
}
