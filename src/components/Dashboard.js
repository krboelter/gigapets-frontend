import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../redux/actions/UsersAction'

function Dashboard(props) {
	const [user, setUser] = useState({})

	console.log(props.user, "FROM DASHBOARD - REDUX")
	return (
		<div className='dashboard-container'>
			{ !props.loaded ?
				<p>Loading...</p>:
				<p>Hello from props, {props.user.first_name}</p>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		user: state.user,
		loaded: state.loaded
	}
}

const mapDispatchToProps = {
	getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
