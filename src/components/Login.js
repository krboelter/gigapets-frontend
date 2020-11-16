import React  from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/UsersAction'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'

/*
	"id": 10,
    "username": "MrTest",
		"password": "abc123"
    "first_name": "Ken",
    "last_name": "Boelter"
*/

const useStyles = makeStyles({
	shadowBox: {
		width: '35%',
		height: '650px',
		boxShadow: '0 0 8px black',
		margin: '100px auto',
	},
    title: {
        color: '#6d3fc1',
        fontSize: '26px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '2px solid black',
		boxShadow: '0 2px 4px black',
		fontWeight: 'bold'
    },
	loginContainer: {
		width: '60%',
		margin: '100px auto'
	},
	required: {
		color: 'red'
	}
})

function Login(props) {
	const styled = useStyles()

	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.required('Required'),
			password: Yup.string()
				.required('Required')
		}),
		onSubmit: (values, {setSubmitting}) => {
			console.log(typeof values)
			props.loginUser(values)
			props.history.push('/dashboard')
		}
	})

	return (
		<div className={styled.shadowBox}>
			<h3 className={styled.title}>Login</h3>
			<div className={styled.loginContainer}>
				<form onSubmit={formik.handleSubmit} className='form'>
					<label htmlFor="username">Username:</label>
					<input
						type='text'
						name='username'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.username}
					/>
					{formik.touched.username && formik.errors.username ? (
						<div className={styled.required}>{formik.errors.username}</div>
					): null}

					<label htmlFor="password">Password:</label>
					<input
						type='password'
						name='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className={styled.required}>{formik.errors.password}</div>
					): null}
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	)
}

const mapDispatchToProps = {
	loginUser
}

export default connect(null, mapDispatchToProps)(Login)
