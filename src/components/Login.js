import React, { useState, useEffect }  from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/UsersAction'

function Login(props) {
	const [user, setUser] = useState({
		username: "",
		password: "",
		first_name: "",
		last_name: ""
	})

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(user, "USER OBJECT")
		props.loginUser(user)
		props.history.push('/dashboard')
	}

	return (
		<div className='login-container'>
			<form onSubmit={handleSubmit}  className='login-form'>
				<label>Username:</label>
				<input
					type='text'
					name='username'
					onChange={handleChange}
				/>
				<label>Password:</label>
				<input
					type='password'
					name='password'
					onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
		</div>
	)
}

const mapDispatchToProps = {
	loginUser
}

export default connect(null, mapDispatchToProps)(Login)
