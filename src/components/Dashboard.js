import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../redux/actions/UsersAction'

function Dashboard(props) {
	const [user, setUser] = useState({})

	useEffect(() => {
		setUser({...props.user.user})
	}, [props.user])


	return (
		<div className='dashboard-container'>
			{ !props.user.loaded ?
				<p>Loading...</p>:
				<p>Hello from props, {user.first_name}</p>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		user: state.user,
	}
}

const mapDispatchToProps = {
	getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
