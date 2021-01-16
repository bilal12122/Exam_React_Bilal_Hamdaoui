const initialState = {favElementsID: []}

function favElements(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'SAVE_ELEMENT':
            nextState = {
                ...state,
                // myValues: [...state.myValues, action.value]
                favElementsID: [...state.favElementsID, action.value]
            };
            return nextState || state
        case 'UNSAVE_ELEMENT':
            nextState = {
                ...state,
                favElementsID: state.favElementsID.filter(id => id !== action.value)
            };
            return nextState || state
        default:
            return state
    }
    ;
}

export default favElements;
