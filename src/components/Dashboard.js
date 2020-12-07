import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../redux/actions/EntriesAction'
import { makeStyles, styled } from '@material-ui/core/styles'

const useStyles = makeStyles({
	entryContainer: {
		display: 'flex',
		flexDirection: 'column',
		boxShadow: '0 0 10px black',
		margin: '20px 10px'
	},
	name: {
		fontWeight: 'bold',
		fontSize: '18px',
		color: '#6d3fc1'
	}
})

function Dashboard(props) {
	const styled = useStyles()

	useEffect(() => {
		if (props.user?.loaded) {
			props.getEntries(props.user?.user.id)
		}
	}, [])

	return (
		<div className='dash-container'>
			<h2 className='dash-title'>Dashboard</h2>
			{ !props.user.loaded ?
				<p className='loading'>Loading...</p>:

				<div className='dash-content'>
					<p className='dash-user'>Welcome to the dashboard, {props.user.user.first_name}</p>
					<div className='entries-container'>
						{props.entries.entries.map((entry, index) => (
							<div key={index} className={styled.entryContainer}>
								<h4 className={styled.name}>Name: {entry.name}</h4>
								<p>Food: {entry.food_name}</p>
								<p>Category: {entry.category}</p>
								<p>Amount: {entry.amount}</p>
								<p>Oz: {entry.amount_type /*dropdown*/}</p>
								<p>Date: {entry.date}</p>
							</div>
						))}
					</div>
				</div>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		user: state.user,
		entries: state.entries.entries
	}
}

const mapDispatchToProps = {
	getEntries
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
