import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function Dashboard(props) {
	return (
		<div className='dashboard-container'>
			{ !props.user.loaded ?
				<p>Loading...</p>:
				<div>
					<p>Hello from props, {props.user.user.first_name}</p>
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
