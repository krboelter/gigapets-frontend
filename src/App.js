import React, { useState, useEffect } from 'react';
import './styles.css'
import { Route } from 'react-router-dom'
import { getToken } from './utils/api'
import { connect } from 'react-redux'

import { PrivateRoute } from './components/Private'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App(props) {
	const [token, setToken] = useState(getToken())

	return (
		<div className="App">
			<Navigation />

			<Route exact path='/' component={Home} />
			<Route exact path='/login' component={Login}/>
			<PrivateRoute exapt path='/dashboard' component={Dashboard} />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		loaded: state.loaded
	}
}

export default connect(mapStateToProps, null)(App);
