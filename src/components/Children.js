import React from 'react'
import {connect} from 'react-redux'

function Children() {
	return (
		<div>
			<h1>Children</h1>
			<ul>
				<li><a>Child One</a></li>
				<li><a>Child Two</a></li>
				<li><a>Child Three</a></li>
			</ul>
		</div>
	)
}

const mapStateToProps = state => {

}

const mapDispatchToProps = {

}

export default connect()(Children)