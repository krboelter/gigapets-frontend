import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ componenet: Component, ...rest }) => (
	<Route {...rest} render={props => {
		localStorage.getItem("authToken") ? (
			<Component {...props} />
	) : (
		<Redirect to={{
			pathname: './Login',
			state: {from: props.location}
		}} />
	)
	}} />
)
