import { api } from '../../utils/api'

export const GET_ENTRIES_STARTED = "GET_ENTRIES_STARTED"
export const GET_ENTRIES_SUCCESSFUL = "GET_ENTRIES_SUCCESSFUL"
export const GET_ENTRIES_ERROR = "GET_ENTRIES_ERROR"

export function getEntries(userId) {
    return dispatch => {
        dispatch({ type: GET_ENTRIES_STARTED })

        api()
            .get(`/api/auth/${userId}/entries`)
            .then(res => {
                console.log(res.data, "ENTRIES")
                dispatch({ type: GET_ENTRIES_SUCCESSFUL, payload: res.data })
            })
            .catch(error => {
                dispatch({ type: GET_ENTRIES_ERROR, payload: error })
            })
    }
}