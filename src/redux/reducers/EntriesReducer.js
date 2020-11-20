import {
    GET_ENTRIES_STARTED,
    GET_ENTRIES_SUCCESS,
    GET_ENTRIES_ERROR
} from '../actions/EntriesAction'

const initialState = {
    entries: {
        message: "",
        entries: []
    },
    isLoading: false,
    loaded: false,
    error: ""
}

export const EntriesReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_ENTRIES_STARTED:
            return {
                ...state,
                isLoading: true,
                loaded: false,
                error: ""
            }
        case GET_ENTRIES_SUCCESS:
            return {
                ...state,
                entries: {
                    ...state.entries,
                    message: action.payload.message,
                    entries: [...action.payload.entries]
                },
                isLoading: false,
                loaded: true,
                error: ""
            }
        case GET_ENTRIES_ERROR:
            return {
                ...state,
                isLoading: false,
                loaded: false,
                error: action.payload.message
            }
        default:
            return state
    }
}