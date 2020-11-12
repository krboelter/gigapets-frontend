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
				{ !props.loaded &&
					<li><Link className='nav-link' to='/login'>Login</Link></li>
				}
				{ !props.loaded && 
					<li><Link className='nav-link' to='/new-user'>New User</Link></li>
				}
				
				{/* IF USER IS AUTHENTICATED */}
				{ props.loaded &&
					<li><Link className='nav-link' to='/dashboard'>Dashboard</Link></li>
				}
				{ props.loaded &&
					<li><Link className = 'nav-link' to='/children'>Children</Link></li>
				}
			</ul>
		</nav>
	)
}

const mapStateToProps = state => {
	return {
		loaded: state.user.loaded
	}
}

export default connect(mapStateToProps, null)(Navigation)
