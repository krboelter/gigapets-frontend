import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
	return(
		<nav className='site-navigation'>
			<h3 className='site-name'>GIGAPETS</h3>
			<ul>
				<li><Link className='nav-link' to='/'>Home</Link></li>
				<li><Link className='nav-link' to='/login'>Login</Link></li>

				
			</ul>
		</nav>
	)
}
