import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';

class App extends Component {

    addTrack() {
        console.log('add track', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack() {
        console.log('find track', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" ref={(input => { this.trackInput = input })}/>
                    <button onClick={this.addTrack.bind(this)}>Add track</button>
                </div>
                <div>
                    <input type="text" ref={(input => { this.searchInput = input })}/>
                    <button onClick={this.findTrack.bind(this)}>Find track</button>
                </div>
                <div>
                    <button onClick={this.props.onGetTracks}>Get tracks</button>
                </div>
                <ul>
                    {this.props.tracks.map( (track, index) =>
                        <li key={index}> { track.name } </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks.filter( track => track.name.includes(state.filterTracks) )
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            const payload = {
                id: Date.now().toString(),
                name: trackName
            };
            dispatch({type: 'ADD_TRACK', payload: payload});
        },
        onFindTrack: (trackName) => {
            dispatch({type: 'FIND_TRACK', payload: trackName});
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);
