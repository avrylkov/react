import React from 'react';
import {Link} from 'react-router-dom'
import {DataProvider} from './dataProvider.jsx';

export default class ExGridViewRow extends React.Component {
    constructor(props) {
        super(props);
        this.nameChange = this.nameChange.bind(this);
        this.editChange = this.editChange.bind(this);

        let id = this.props.match.params.id;
        let record = DataProvider.byId(id);
        this.state = {
            record: record
        }
    }

    nameChange(e) {
        let record = this.state.record;
        record.name = e.target.value;
        this.setState({record: record});
    }

    editChange(e) {
        let record = this.state.record;
        record.edit = e.target.checked;
        this.setState({record: record});
    }

    render() {
        return (
            <div>
                <form>
                    <div><a target="_blank" href="https://github.com/avrylkov/react/blob/master/app/components/exGridViewRow.jsx">GitHub</a></div>
                    <fieldset>
                        <legend>Форма редактирования</legend>
                        <label>ИД &nbsp;
                            {this.state.record.id}
                        </label>
                        <br/>
                        <label>Имя &nbsp;
                            <input type="text" value={this.state.record.name} onChange={this.nameChange}/>
                        </label>
                        <label>
                            <input type="checkbox" checked={this.state.record.edit} onChange={this.editChange}/>
                            Статус</label>
                    </fieldset>
                </form>
                <Link to={'/exGridView'}>{"< "}Назад</Link>
            </div>
        )
    }
}
