import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../redux/actions/EntriesAction'
import { makeStyles, styled } from '@material-ui/core/styles'

const useStyles = makeStyles({
	entryContainer: {
		display: 'flex',
		padding: '8px 12px',
		flexDirection: 'column',
		boxShadow: '0 0 10px black',
		margin: '20px 10px',
		width: '40%',
		backgroundColor: 'lightgray'
	},
	name: {
		fontWeight: 'bold',
		fontSize: '20px',
		color: '#6d3fc1'
	},
	entryP: {
		fontSize: '16px',
	}
})

function Dashboard(props) {
	const styled = useStyles()

	useEffect(() => {
		if (props.user?.loaded) {
			props.getEntries(props.user?.user.id)
		}
	}, [props.user.loaded])

	return (
		<div className='dash-container'>
			<h2 className='dash-title'>Dashboard</h2>
			{ !props.user.loaded ?
				<p className='loading'>Loading...</p>:

				<div className='dash-content'>
					<p className='dash-user'>Welcome, {props.user.user.first_name}. Below are your most recent entries:</p>
					<div className='entries-container'>
						{props.entries.entries.map((entry, index) => (
							<div key={index} className={styled.entryContainer}>
								<h4 className={styled.name}>Name: {entry.name}</h4>
								<p className={styled.entryP}>Food: {entry.food_name}</p>
								<p className={styled.entryP}>Category: {entry.category}</p>
								<p className={styled.entryP}>Amount: {entry.amount} {entry.amount_type}</p>
								<p className={styled.entryP}>Entered: {entry.date}</p>
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
