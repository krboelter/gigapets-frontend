import { api } from '../../utils/api'

export const GET_LOGIN_STARTED = 'GET_LOGIN_STARTED'
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS'
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR'
export const GET_USER_STARTED = 'GET_USER_STARTED'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'

export function loginUser(newUser) {
	return dispatch => {
		dispatch({type: GET_LOGIN_STARTED})

		api()
			.post('/api/auth/login', newUser)
			.then(res => {
				console.log(res.data, "LOGIN WAS SUCCESSFULL")
				dispatch({type: GET_LOGIN_SUCCESS, payload: res.data})
				localStorage.setItem('token', res.data.token)
			})
			.catch(error => {
				dispatch({type: GET_LOGIN_ERROR, payload: error})
			})
		}
}

export function getUserInfo(userId) {
	return dispatch => {
		dispatch({type: GET_USER_STARTED})

		api()
			.get(`/api/auth/users/${userId}`)
			.then(res => {
				dispatch({type: GET_USER_SUCCESS, payload: res.data})
			})
			.catch(error => {
				dispatch({type: GET_USER_ERROR, payload: error})
			})
	}
}
