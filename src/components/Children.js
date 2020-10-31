import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { Button } from '@material-ui/core'
import ChildModal from './ChildModal'

import { getChildren } from '../redux/actions/ChildAction'

function Children(props) {
	const [modalOpen, setModalOpen] = useState(false)

	const handleClose = () => {
		setModalOpen(!modalOpen)
	}

	useEffect(() => {
		props.getChildren()
	}, [])

	return (
		<div>
			<h1>Children</h1>
			<ul>
				{props.children.map(child => {
					<Button>{child}</Button>
				})}
			</ul>

			<ChildModal open={modalOpen} handleClose={handleClose} />
		</div>
	)
}

const mapStateToProps = state => {
	children: state.ChildReducer
	// add get user so you can pass the userId to the getChildren
}

const mapDispatchToProps = {
	getChildren
	// add get user so you can pass the userId to the getChildren
}

export default connect(mapStateToProps, mapDispatchToProps)(Children)
