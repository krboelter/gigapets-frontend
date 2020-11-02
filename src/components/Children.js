import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { Button } from '@material-ui/core'
import ChildModal from './ChildModal'

import { getChildren } from '../redux/actions/ChildAction'

function Children(props) {
	const [modalOpen, setModalOpen] = useState(false)
	const [children, setChildren] = useState([])

	const handleClose = () => {
		setModalOpen(!modalOpen)
	}

	useEffect(() => {
		// try to add child, not permitted to access this page
		// no children for MrTest, also getting 404
		props.getChildren(props.user.id)
		setChildren(props.children?.children)
	}, [])

	console.log(props.children, "FROM CHILDREN")

	return (
		<div>
			<h1>Children</h1>
			<ul>
				{!props.children?
					<p>Loading...</p>:
					children.map(child => (
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
		children: state.children
	}
}

const mapDispatchToProps = {
	getChildren,
}

export default connect(mapStateToProps, mapDispatchToProps)(Children)
