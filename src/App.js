import React, { useState } from 'react';
import './styles.css'
import { Route } from 'react-router-dom'
import { getToken } from './utils/api'

import { PrivateRoute } from './components/Private'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
	const [token, setToken] = useState(getToken())

	return (
		<div className="App">
			<Navigation />

			<Route exact path='/' component={Home} />
			{ !token &&
				<Route exact path='/login' component={Login}/>
			}
			<PrivateRoute exapt path='/dashboard' component={Dashboard} />
		</div>
	);
}

export default App;
