import React from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../redux/actions/UsersAction'

function Dashboard(props) {
	return (
		<div className='dashboard-container'>
			hello from dashboard
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
