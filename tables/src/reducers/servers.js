const initialState = [];

export default function servers(state = initialState, action) {
    if (action.type === 'FETCH_SERVERS_SUCCESS') {
        return action.payload;
    } else if (action.type === 'ADD_SERVER') {
        return [ ...state, action.payload ];
    } else if (action.type === 'ADD_SERVERS') {
        return state.concat(action.payload);
    } else if (action.type === 'HIDE_SERVER') {
        state.remove(action.payload);
        return state;
    }
    return state;
}