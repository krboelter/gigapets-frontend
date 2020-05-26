import React, { useState, useEffect }  from 'react'

export default function Login() {
	const [user, setUser] = useState({
	})

	return (
		<div className='login-container'>
			<form className='login-form'>
				<label>Username:</label>
				<input />
				<label>Password:</label>
				<input />
			</form>
		</div>
	)
}
