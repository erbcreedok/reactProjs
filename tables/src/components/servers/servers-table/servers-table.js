import React, { Component } from 'react';
import './servers-table.css';
import ServerRow from '../server-row/server-row';

export default class ServersTable extends Component {

    headers = {
        id: 'id',
        name: 'name',
        comment: 'comment',
        port: 'port',
        url: 'url'
    };

    render () {
        return (
            <div className="servers-table" >
                <ServerRow  isHeader={true} server={this.headers}/>
                { this.props.servers.map((server, index) =>
                    <ServerRow key={index} server={server}/>
                )}
            </div>
        );
    }
}
