import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { Button } from '@material-ui/core'
import ChildModal from './ChildModal'

import { getUserInfo } from '../redux/actions/UsersAction'

function Children(props) {
	const [modalOpen, setModalOpen] = useState(false)

	const handleClose = () => {
		setModalOpen(!modalOpen)
	}

	useEffect(() => {
		props.getUserInfo(props.user.id)
	}, [])

	console.log(props.children, "FROM CHILDREN")

	return (
		<div>
			<h1>Children</h1>
			<ul>
				{!props.children?
					<p>Loading...</p>:
					props.children.map(child => (
						<Button>{child}</Button>
				))}
			</ul>

			<ChildModal open={modalOpen} handleClose={handleClose} />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		user: state.user.user,
		children: state.user.children
	}
}

const mapDispatchToProps = {
	getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Children)
