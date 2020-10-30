import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export function PrivateRoute(props) {
	const {
		componenet: Component,
		...rest
	} = props

	return (
		<Route {...rest} render={renderProps => {
			if (localStorage.getItem('token')) {
				return <Component {...renderProps} />
			}else  {
				return <Redirect to='/signin' />
			}
		}} />
	)
}
