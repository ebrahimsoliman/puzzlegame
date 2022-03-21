import {HOME, QUESTION, SET_ERROR} from "./actions/types";


const initialState = {
    home: [],
    error: {message: '', isError: ''},
    question: {}
};

function uiReducer(
    uiState = initialState,
    action
) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case HOME:
            return {
                ...uiState,
                home: payload

            };
        case SET_ERROR:
            return {
                ...uiState,
                error: payload.error
            };
        case QUESTION:
            return {
                ...uiState,
                question: payload
            };
        default:
            return uiState;
    }
}

export default uiReducer;
