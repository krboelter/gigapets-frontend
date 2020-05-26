import api from '../../utils/api'

export const GET_LOGIN_STARTED = 'GET_LOGIN_STARTED'
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS'
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR'

export function loginUser(newUser) {
	dispatch => {
		{type: GET_LOGIN_STARTED}

		api.get('/api/auth/register', newUser)
			.then(res => {
				{type: GET_LOGIN_STARTED, dispatch: res}
			})
			.catch(error => {
				{type: GET_LOGIN_ERROR, dispatch: error}
			})
		}
}
