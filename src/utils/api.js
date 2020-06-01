import axios from 'axios'

export function getToken() {
	return localStorage.getItem('token')
}

export function api() {
	return axios.create({
		baseURL: 'https://ken-gigapets.herokuapp.com',
		headers: {
			Authorization: getToken()
		}
	})
}
