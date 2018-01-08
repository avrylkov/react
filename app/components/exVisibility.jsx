import React from 'react';

export default class ExVisibility extends React.Component {
    constructor(){
        super();
        this.toggleVisible = this.toggleVisible.bind(this);
        this.toggleEnable = this.toggleEnable.bind(this);
        this.changeName = this.changeName.bind(this);
        this.state = {
            visible: true,
            name: '',
            enable: true
        }
    }

    toggleVisible(){
        let visible = !this.state.visible;
        this.setState({visible: visible})
    }

    toggleEnable(){
        let enable = !this.state.enable;
        this.setState({enable: enable})
    }

    changeName(e) {
       let value = e.target.value;
       this.setState({name: value});
    }

    render() {
        return (
            <div>
                <h3>Скрывать, делать не доступными контролы</h3>
                <div><a href="https://github.com/avrylkov/react/blob/24122017/app/components/exVisibility.jsx">GitHub</a></div>
                <span>Скрыть</span>
                <input type="checkbox" onChange={this.toggleVisible} checked={this.state.visible}/>
                <span>Не доступен</span>
                <input type="checkbox" onChange={this.toggleEnable} checked={this.state.enable}/>
                <br/>
                <span>Имя</span>
                {this.state.visible && <input type="text"
                                              value={this.state.name}
                                              disabled={this.state.enable}
                                              onChange={this.changeName}/>}
            </div>
        );
    }
}


