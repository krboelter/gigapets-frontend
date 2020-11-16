import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { createUser } from '../redux/actions/UsersAction'

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
    container: {
        width: '60%',
        margin: '10px auto'
    },
    required: {
        color: 'red'
    }
})

function NewUser(props) {
    const styled = useStyles()

    return (
        <Formik
            initialValues={{ username: '', password: '',first_name: '', last_name: ''}}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('Required'),
                password: Yup.string()
                    .min(6, 'Must be 6 characters or more')
                    .required('Required'),
                first_name: Yup.string()
                    .required('Required'),
                last_name: Yup.string()
                    .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                props.createUser(values)
            }}
        >
            {formik => (
                <div className={styled.shadowBox}>
                    <h3 className={styled.title}>Create New User</h3>
                    <div className={styled.container}>
                        <form className="form" onSubmit={formik.handleSubmit}>
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                {...formik.getFieldProps('username')}
                            />
                            {formik.touched.username && formik.errors.username? (
                                <div className={styled.required}>{formik.errors.username}</div>): null}

                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password? (
                                <div className={styled.required}>{formik.errors.password}</div>): null}

                            <label htmlFor="first_name">First Name</label>
                            <input
                                id="first_name"
                                type="text"
                                {...formik.getFieldProps('first_name')}
                            />
                            {formik.touched.first_name && formik.errors.first_name? (
                                <div className={styled.required}>{formik.errors.first_name}</div>): null}

                            <label htmlFor="last_name">First Name</label>
                            <input
                                id="last_name"
                                type="text"
                                {...formik.getFieldProps('last_name')}
                            />
                            {formik.touched.last_name && formik.errors.last_name? (
                                <div className={styled.required}>{formik.errors.last_name}</div>): null}
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

const mapDispatchToProps = {
    createUser
}

export default connect(null, mapDispatchToProps)(NewUser)