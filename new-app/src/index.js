import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import './index.css';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

