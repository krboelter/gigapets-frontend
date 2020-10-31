import { api } from '../../utils/api'
export const GET_CHILDREN_STARTED = 'GET_CHILDREN_STARTED'
export const GET_CHILDREN_SUCCESS = 'GET_CHILDREN_SUCCESS'
export const GET_CHILDREN_ERROR = 'GET_CHILDREN_ERROR'

export function getChildren(userId) {
    // returns all the children associated with the userId
    return dispatch => {
        dispatch({ GET_CHILDREN_STARTED })

        api()
            .get('/api/auth/userId/children')
            .then(res => {
                dispatch({ type: GET_CHILDREN_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: GET_CHILDREN_ERROR, payload: err.message})
            })
    }
}
