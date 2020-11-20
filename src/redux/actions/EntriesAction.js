import { api } from '../../utils/api'

export const GET_ENTRIES_STARTED = "GET_ENTRIES_STARTED"
export const GET_ENTRIES_SUCCESS = "GET_ENTRIES_SUCCESS"
export const GET_ENTRIES_ERROR = "GET_ENTRIES_ERROR"

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
                dispatch({ type: GET_ENTRIES_ERROR, payload: error })
            })
    }
}
