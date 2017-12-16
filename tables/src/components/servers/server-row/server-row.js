import React, { Component } from 'react';
import './server-row.css';


export default class ServerRow extends Component {

    isHeader = this.props.isHeader;

    server = this.props.server;

    polesWidth = {
        id: 30 + '%',
        name: 100 + '%',
        comment: 210 + '%',
        port: 60 + '%',
        url: 60 + '%',
        image: 30+'%'
    };

    polesTitle = {
        name: 'Название',
        comment: 'Комментарий',
        port: 'Порт',
        url: ''
    };

    poles = [
        {
            name: 'image',
            title: '',
            data:
                this.server.image ? <div className="server-avatar" style={{backgroundImage: 'url(' + this.server.image + ')'}}/>
                    : <div src={this.props.server.image} className="server-avatar">{ this.props.server.name[0] }</div>
        },
        { name: 'name', title: 'Название', data: this.props.server.name },
        { name: 'comment', title: 'Комментарий', data: this.props.server.comment },
        { name: 'port', title: 'Порт', data: this.props.server.port },
        { name: 'url', title: '', data: <a href={ this.props.server.url } > Перейти </a> }
    ];


    render () {
        if (this.isHeader) {
            return (
                <div className="server-row table-row table-header">{
                    this.poles.map( pole =>
                        <div style={{width: this.polesWidth[pole.name] }} className="table-column"> { this.polesTitle[pole.name] } </div>
                    )
                }</div>
            );
        }
        return (
            <div className="server-row table-row">{
                this.poles.map( pole =>
                    <div style={{width: this.polesWidth[pole.name] }} className="table-column"> { pole.data } </div>
                )
            }</div>
        );
    }
}
