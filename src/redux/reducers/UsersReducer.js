import {
	GET_LOGIN_STARTED,
	GET_LOGIN_SUCCESS,
	GET_LOGIN_ERROR,
	GET_USER_STARTED,
	GET_USER_SUCCESS,
	GET_USER_ERROR
} from '../actions/UsersAction'

const initialState = {
	user: {
		username: "",
		password: "",
		first_name: "",
		last_name: "",
	},
	isLoading: false,
	error: ""
}

export const UsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LOGIN_STARTED:
			return {
				...state,
				isLoading: true,
				error: ""
			}
		case GET_LOGIN_SUCCESS:
			return {
				...state,
				user: {
					...state.user,
					username: action.payload.username,
					password: action.payload.password
				},
				isLoading: false,
				error: ""
			}
		case GET_LOGIN_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload.message
			}
		case GET_USER_STARTED:
			return {
				...state,
				isLoading: true,
				error: ""
			}
		case GET_USER_SUCCESS:
			return {
				...state,
				user: [...state.user,
					{
					username: action.payload.username,
					password: action.payload.password,
					first_name: action.payload.first_name,
					last_name: action.payload.last_name
				}],
				isLoading: false,
				error: ""
			}
		case GET_USER_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload.message
			}
		default:
			return state
	}
}
