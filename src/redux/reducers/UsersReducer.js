import {
	GET_LOGIN_STARTED,
	GET_LOGIN_SUCCESS,
	GET_LOGIN_ERROR
} from '../actions/UsersAction'

const initialState = {
	username: "",
	password: "",
	first_name: "",
	last_name: ""
}

export default const UsersReducer(state = initialState, action) {
	switch (action.type) {
		case GET_LOGIN_STARTED:
			return null

		default:
			return state
	}
}
