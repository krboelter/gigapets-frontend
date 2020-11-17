import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import ChildCard  from './ChildCard'
import { getUserInfo } from '../redux/actions/UsersAction'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '80%',
		margin: '0 auto'
	}
})

// every time you switch between dash and children in nav, a new child appears
function Children(props) {
	const styles = useStyles()

	useEffect(() => {
		props.getUserInfo(props.user.id)
	}, [])

	return (
		<div>
			<h1>Children</h1>
			<div className={styles.container}>
				{!props.children?
					<p>Loading...</p>:
					props.children.map(child => (
						<ChildCard key={child.id} child={child}/>
				))}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.user.user,
		children: state.user.children
	}
}

const mapDispatchToProps = {
	getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Children)
