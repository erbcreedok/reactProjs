import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServersTable from '../../components/servers/servers-table/servers-table.js';
import { fetchServers, saveServers } from '../../actions/servers-actions';

import './servers-container.css';

export class Servers extends Component {

    componentDidMount() {
        this.props.onFetchServers();
    }

    render() {
        return (
            <div className="servers-container container">
                {/*<button onClick={this.props.saveServers(this.props.servers)}>Save</button>*/}
                <ServersTable servers={ this.props.servers } />
            </div>
        );
    }
}

export default connect(
    state => ({
        servers: state.servers,
    }),
    dispatch => ({
        onFetchServers: () => {
            console.log('ServersTable loaded');
            dispatch(fetchServers());
        },
        saveServers: (servers) => {
            console.log(servers);
            saveServers(servers);
        }

    })
)(Servers);