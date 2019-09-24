
//This array is originally empty and will contain objects with ids, etc
const initialState = [];

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SET_ALERT':
            return [...state, payload];
        default:
            return state
    }
}