import React from 'react';

export default class ExGridViewRow extends React.Component {
    render() {
        console.log(props.params.id);
        let record = DataProvider.byId(props.params.id);
        return ( <input type="text" value={record.name}/>
        )
    }
}
