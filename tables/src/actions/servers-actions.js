import { firebaseConfig } from '../constants/firebaseConfig';

const firebase = require('firebase');
const app = firebase.initializeApp(firebaseConfig);

const servers = [
    {
        id: 0,
        name: 'Alfa-test 1',
        port: '8010/old',
        url: 'http://vserver048.alfa-bank.kz:8010/old',
        comment: 'some comment, if need',
        server_log: 'some url here'
    },
    {
        id: 1,
        name: 'Alfa-test 2',
        port: '1080/get',
        url: 'http://vserver048.alfa-bank.kz:1080/get',
        image: 'http://nsu.ru/rs/mw/res/200px-/68002/1200x630bb.jpg',
        comment: 'some comment, if need',
        server_log: 'some url here'
    },
    {
        id: 2,
        name: 'Валютный платеж',
        port: '1080/get',
        url: 'http://vserver048.alfa-bank.kz:1080/get',
        comment: 'some comment, if need',
        server_log: 'some url here'
    },
    {
        id: 3,
        name: 'Тестовый сервер 2',
        port: '92133',
        url: 'http://vserver048.alfa-bank.kz:92133',
        comment: 'some comment, if need',
        server_log: 'some url here'
    }
];
let index = 0;

export const fetchServers = () => dispatch => {
    // dispatch({type: 'FETCH_SERVERS_SUCCESS', payload: servers});
    app.database().ref('servers').once('value').then( (snapshot) => {
        dispatch({type: 'FETCH_SERVERS_SUCCESS', payload: snapshot.val()});
    });
};

export const getServer = () => dispatch => {
    setTimeout( () => {
        dispatch({type: 'ADD_SERVER', payload: servers[index]});
        index++;
        index %= servers.length;
        getServer();
    }, 3000)
};

export const saveServers = (servers) => {
    app.database().ref('servers').set(servers).then(() => {
        console.log('Servers successfully saved');
    });
};