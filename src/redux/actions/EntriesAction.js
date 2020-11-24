import { api } from '../../utils/api'

export const GET_ENTRIES_STARTED = "GET_ENTRIES_STARTED"
export const GET_ENTRIES_SUCCESS = "GET_ENTRIES_SUCCESS"
export const GET_ENTRIES_ERROR = "GET_ENTRIES_ERROR"
export const GET_NEW_ENTRY_STARTED = "GET_NEW_ENTRY_STARTED"
export const GET_NEW_ENTRY_SUCCESS = "GET_NEW_ENTRY_SUCCESS"
export const GET_NEW_ENTRY_ERROR = "GET_NEW_ENTRY_ERROR"

export function getEntries(userId) {
    return dispatch => {
        dispatch({ type: GET_ENTRIES_STARTED })

        api()
        	.get(`/api/auth/users/${userId}/entries`)
            .then(res => {
                console.log(res.data, "ENTRIES")
                dispatch({ type: GET_ENTRIES_SUCCESS, payload: res.data })
            })
            .catch(error => {
                console.log(error, "ERROR IN ENTRIES")
                dispatch({ type: GET_ENTRIES_ERROR, payload: error.data })
            })
    }
}

export function newEntry(userId, entry) {
    return dispatch => {
        dispatch({ type: GET_NEW_ENTRY_STARTED })

        api()
            .post(`api/auth/users/${userId}/entries`, entry)
            .then(res => {
                console.log(res.data, "NEW ENTRY CREATED")
                dispatch({ type: GET_NEW_ENTRY_SUCCESS, payload: res.data })
            })
            .catch(error => {
                console.log(error, "ERROR IN NEW ENTRY")
                dispatch({ type: GET_NEW_ENTRY_ERROR, payload: error.data })
            })
    }
}