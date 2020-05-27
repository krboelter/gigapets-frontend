import { api } from '../../utils/api'

export const GET_LOGIN_STARTED = 'GET_LOGIN_STARTED'
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS'
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR'

export function loginUser(newUser) {
	return dispatch => {
		dispatch({type: GET_LOGIN_STARTED})

		api.post('/api/auth/register', newUser)
			.then(res => {
				dispatch({type: GET_LOGIN_SUCCESS, payload: res})
			})
			.catch(error => {
				dispatch({type: GET_LOGIN_ERROR, payload: error})
			})
		}
}
