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
import Children from './components/Children'
import NewUser from './components/NewUser'

function App(props) {
	return (
		<div className="App">
			<Navigation />

			<Route exact path='/' component={Home} />
			<Route exact path='/new-user' component={NewUser} />
			<Route exact path='/login' component={Login}/>
			<PrivateRoute exact path='/children' component={Children}/>
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
