import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'

function Navigation(props) {
	const authenticated = localStorage.getItem('token')
	return(
		<nav className='site-navigation'>
			<h3 className='site-name'>GIGAPETS</h3>
			<ul>
				<li><Link className='nav-link' to='/'>Home</Link></li>

				{/* IF USER IS NOT AUTHENTICATED */}
				{ !authenticated &&
					<li><Link className='nav-link' to='/login'>Login</Link></li>
				}
				
				{/* IF USER IS AUTHENTICATED */}
				{ authenticated &&
					<li><Link className='nav-link' to='/dashboard'>Dashboard</Link></li>
				}
			</ul>
		</nav>
	)
}

const mapStateToProps = state => {
	return {
		loaded: state.loaded
	}
}

export default connect(mapStateToProps, null)(Navigation)
