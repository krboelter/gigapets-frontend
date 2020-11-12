import {
	GET_LOGIN_STARTED,
	GET_LOGIN_SUCCESS,
	GET_LOGIN_ERROR,
	GET_USER_STARTED,
	GET_USER_SUCCESS,
	GET_USER_ERROR,
	GET_CREATE_STARTED,
	GET_CREATE_SUCCESS,
	GET_CREATE_ERROR
} from '../actions/UsersAction'

const initialState = {
	user: {
		id: 0,
		username: "",
		password: "",
		first_name: "",
		last_name: "",
	},
	children: [],
	isLoading: false,
	loaded: false,
	error: ""
}

export const UsersReducer = (state=initialState, action) => {
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
					...action.payload.user
				},
				isLoading: false,
				loaded: true,
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
				user:{
					...state.user,
					...action.payload.user
				},
				children: [
					...state.children,
					...action.payload.children
				],
				isLoading: false,
				loaded: true,
				error: ""
			}
		case GET_USER_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload.message
			}
		case GET_CREATE_STARTED:
			return {
				...state,
				isLoading: true,
				error: ""
			}
		case GET_CREATE_SUCCESS:
			return {
				...state,
				user: {
					...state.user,
					...action.payload.user
				},
				isLoading: false,
				error: ""
			}
		case GET_CREATE_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload.message
			}
		default:
			return state
	}
}
