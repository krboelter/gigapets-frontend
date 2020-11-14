import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { createUser } from '../redux/actions/UsersAction'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        margin: '200px auto'
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
                <form class={styled.container} onSubmit={formik.handleSubmit}>
                    <div className='input-field-container'>
                        <label className='label-field' htmlFor="username">Username</label>
                        <input
                            className='input-field'
                            id="username"
                            type="text"
                            {...formik.getFieldProps('username')}
                        />
                        {formik.touched.username && formik.errors.username? (
                            <div className={styled.required}>{formik.errors.username}</div>): null}
                    </div>

                    <div className='input-field-container'>
                        <label className='label-field'  htmlFor="password">Password</label>
                        <input
                            className='input-field'
                            id="password"
                            type="password"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password? (
                            <div className={styled.required}>{formik.errors.password}</div>): null}
                    </div>

                    <div className='input-field-container'>
                        <label className='label-field'  htmlFor="first_name">First Name</label>
                        <input
                            className='input-field'
                            id="first_name"
                            type="text"
                            {...formik.getFieldProps('first_name')}
                        />
                        {formik.touched.first_name && formik.errors.first_name? (
                            <div className={styled.required}>{formik.errors.first_name}</div>): null}
                    </div>

                    <div className='input-field-container'>
                        <label className='label-field'  htmlFor="last_name">First Name</label>
                        <input
                            className='input-field'
                            id="last_name"
                            type="text"
                            {...formik.getFieldProps('last_name')}
                        />
                        {formik.touched.last_name && formik.errors.last_name? (
                            <div className={styled.required}>{formik.errors.last_name}</div>): null}
                    </div>
                    <button className='button' type="submit">Submit</button>
                </form>
            )}
        </Formik>
    )
}

const mapDispatchToProps = {
    createUser
}

export default connect(null, mapDispatchToProps)(NewUser)