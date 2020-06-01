import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../redux/actions/UsersAction'

function Dashboard(props) {

	const [user, setUser] = useState({})

	useState(() => {
		setUser(
			props.getUserInfo(10)
		)
	})

	return (
		<div className='dashboard-container'>
			<p>Hello from props, {props.user}</p>
			<p>Hello from local state, {user}</p>	
		</div>
	)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = {
	getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
