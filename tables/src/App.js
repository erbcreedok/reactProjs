import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServersContainer from './containers/servers-container/servers-container';
import MainSection from './containers/main-section/main-section';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <MainSection/>
                <section id="servers-container" style={{ marginTop: -100+'px', marginBottom: 100+'px'}}>
                    <ServersContainer  />
                </section>
            </div>
        );
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(App);
