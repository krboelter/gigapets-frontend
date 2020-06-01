import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../redux/actions/UsersAction'

function Dashboard(props) {
	console.log(props.user, "FROM DASHBOARD - REDUX")
	return (
		<div className='dashboard-container'>
			<p>Hello from props, {props.user.first_name}</p>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, null)(Dashboard)
