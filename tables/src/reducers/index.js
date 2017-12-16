import { combineReducers } from 'redux';

import servers from './servers';
import serverLogs from './server-logs';

export default combineReducers({
    servers,
    serverLogs,
})

