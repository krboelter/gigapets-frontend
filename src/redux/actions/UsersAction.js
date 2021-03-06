import { api } from '../../utils/api'

export const GET_LOGIN_STARTED = 'GET_LOGIN_STARTED'
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS'
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR'
export const GET_USER_STARTED = 'GET_USER_STARTED'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'
export const GET_CREATE_STARTED = 'GET_CREATE_STARTED'
export const GET_CREATE_SUCCESS = 'GET_CREATE_SUCCESS'
export const GET_CREATE_ERROR = 'GET_CREATE_ERROR'

export function loginUser(newUser) {
	return dispatch => {
		dispatch({type: GET_LOGIN_STARTED})

		api()
			.post('/api/auth/login', newUser)
			.then(res => {
				console.log(res.data, "LOGIN WAS SUCCESSFULL")
				// console.log(res, "RES FROM ACTIONS")
				dispatch({type: GET_LOGIN_SUCCESS, payload: res.data})
				window.localStorage.setItem('token', res.data.token)
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
				console.log(res.data, "FROM GET USER INFO")
				dispatch({type: GET_USER_SUCCESS, payload: res.data})
			})
			.catch(error => {
				console.log(error, "ERROR FROM GET USER INFO")
				dispatch({type: GET_USER_ERROR, payload: error})
			})
	}
}

export function createUser(newUser) {
	return dispatch => {
		dispatch({ type: GET_CREATE_STARTED })

		api()
			.post(`/api/auth/register`, newUser)
			.then(res => {
				console.log(res.data, "USER CREATED")
				dispatch({ type: GET_CREATE_SUCCESS, payload: res.data })
			})
			.catch(error => {
				console.log(error, "ERROR IN CREATE USER")
				dispatch({ type: GET_CREATE_ERROR, payload: error})
			})
	}
}
