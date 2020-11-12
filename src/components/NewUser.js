import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { createUser } from '../redux/actions/UsersAction'


function NewUser(props) {
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
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username? (
                        <div>{formik.errors.username}</div>): null}

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password? (
                        <div>{formik.errors.password}</div>): null}

                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        type="text"
                        {...formik.getFieldProps('first_name')}
                    />
                    {formik.touched.first_name && formik.errors.first_name? (
                        <div>{formik.errors.first_name}</div>): null}

                    <label htmlFor="last_name">First Name</label>
                    <input
                        id="last_name"
                        type="text"
                        {...formik.getFieldProps('last_name')}
                    />
                    {formik.touched.last_name && formik.errors.last_name? (
                        <div>{formik.errors.last_name}</div>): null}
                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    )
}

const mapDispatchToProps = {
    createUser
}

export default connect(null, mapDispatchToProps)(NewUser)