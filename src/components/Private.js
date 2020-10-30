import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// export const PrivateRoute = ({ componenet: Component, ...rest }) => (
// 	<Route {...rest} render={props => {
// 		localStorage.getItem("token") ? (
// 			return <Component {...props} />
// 	) : (
// 		return <Redirect to={{
// 			pathname: './Login',
// 			state: {from: props.location}
// 		}} />
// 	)
// 	}} />
// )

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
