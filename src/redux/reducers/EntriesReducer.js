import {
    GET_ENTRIES_STARTED,
    GET_ENTRIES_SUCCESS,
    GET_ENTRIES_ERROR
} from '../actions/EntriesAction'

const initialState = {
    entries: [],
    isLoading: false,
    loaded: false,
    error: ""
}