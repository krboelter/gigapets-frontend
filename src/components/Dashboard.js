import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function Dashboard(props) {
	return (
		<div className='dash-container'>
			<h2 className='dash-title'>Dashboard</h2>
			{ !props.user.loaded ?
				<p className='loading'>Loading...</p>:
				<div>
					<p className='dash-user'>Welcome to the dashboard, {props.user.user.first_name}</p>
				</div>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps, null)(Dashboard)
