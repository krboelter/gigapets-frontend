import React, { useState, useEffect }  from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/UsersAction'
// Need a case to solve for invlaid username or password
// check to see the error code for unsuccessful login and handle that error
// also, use formik (installed)

/*
	"id": 10,
    "username": "MrTest",
		"password": "abc123"
    "first_name": "Ken",
    "last_name": "Boelter"
*/

function Login(props) {
	const [user, setUser] = useState({})

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
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
