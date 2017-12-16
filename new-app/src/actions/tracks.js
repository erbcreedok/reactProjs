var mockApiData = [
    {
        id: 1,
        name: 'Smells Like Teen Spirit'
    },
    {
        id: 2,
        name: 'How You Like Me Now'
    },
    {
        id: 3,
        name: 'Танцуй сама'
    },
    {
        id: 4,
        name: 'Өзің ғана'
    },
    {
        id: 5,
        name: 'River'
    }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('I got tracks');
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
    }, 2000);
};