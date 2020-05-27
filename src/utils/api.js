import axios from 'axios'

export function getToken() {
	return localStorage.getItem('token')
}

export const api = axios.create({
	baseURL: 'https://ken-gigapets.herokuapp.com/',
	headers: {
		token: getToken()
	}
})
