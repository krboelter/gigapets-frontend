import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { Button } from '@material-ui/core'
import ChildModal from './ChildModal'

import { getUserInfo } from '../redux/actions/UsersAction'

function Children(props) {
	const [modalOpen, setModalOpen] = useState(false)
	const [selectedChild, setSelectedChild] = useState({})

	const toggleModal = (selected) => {
		setModalOpen(!modalOpen)
		setSelectedChild(selected)
	}

	useEffect(() => {
		props.getUserInfo(props.user.id)
	}, [])

	return (
		<div>
			<h1>Children</h1>
			<ul>
				{!props.children?
					<p>Loading...</p>:
					props.children.map(child => (
						<Button onClick={() => toggleModal(child)} key={child.id}>{child.name}</Button>
				))}
			</ul>

			<ChildModal child={selectedChild} open={modalOpen} toggleModal={toggleModal} />
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user.user,
		children: state.user.children
	}
}

const mapDispatchToProps = {
	getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Children)
