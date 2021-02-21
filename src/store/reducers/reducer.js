const initialState = {
    type: 'initialState',
    buttonState: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ACTION_CHANGE_STATE_BUTTON':
            return {...state, buttonState: action.buttonState};

    }

    return state;
}
