const initialState = [];

export default function serverLogs(state = initialState, action) {
    if (action.type === 'FETCH_SERVER_LOGS_SUCCESS') {
        return action.payload;
    } else if (action.type === 'GET_SERVER_LOG') {
        return [...state, action.payload];
    }
    return state;
}