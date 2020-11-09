import axios from 'axios'

export function getToken() {
	return window.localStorage.getItem('token')
}

export function api() {
	const token = window.localStorage.getItem('token')


	return axios.create({
		baseURL: 'https://ken-gigapets.herokuapp.com',
		headers: {
			Authorization: token
		}
	})
}
