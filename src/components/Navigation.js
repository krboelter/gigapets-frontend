import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
	return(
		<nav className='site-navigation'>
			<h3 className='site-name'>GIGAPETS</h3>
			<ul>
				<li><Link className='nav-link' to='/'>Item 1</Link></li>
				<li><Link className='nav-link' to='/'>Item 2</Link></li>
				<li><Link className='nav-link' to='/'>Item 3</Link></li>
				<li><Link className='nav-link' to='/'>Item 4</Link></li>
			</ul>
		</nav>
	)
}
