import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { newEntry } from '../redux/actions/EntriesAction'
import { getUserInfo } from '../redux/actions/UsersAction'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
    shadowBox: {
        width: '35%',
        height: '650px',
        boxShadow: '0 0 8px black',
        margin: '100px auto'
    },
    formContainer: {
        width: '60%',
        margin: '30px auto'
    },
    entryHeader: {
        color: '#6d3fc1',
        fontSize: '26px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '2px solid lightgray',
        boxShadow: '0 2px 4px black',
		fontWeight: 'bold'
    }
})

// display the past few recent entries -for each child? (so they know what they last entered)
// need to set the value of the chosen child and send it through to the action
function NewEntry(props) {
    const styled = useStyles()
    const [names, setNames] = useState()

    useEffect(() => {
        if (props.children?.length <= 0) {
            console.log('useEffect fired')
            props.getUserInfo(props.user.id)
        }
    },[])

    return (
        <>
            {!props.children?
                <p>Syncing Data...</p>:
                <Formik
                    initialValues={{ food_name: '', amount: 0, amount_type: '', date: '' }}
                    validationSchema={Yup.object({
                        food_name: Yup.string()
                            .required('required'),
                        amount: Yup.number()
                            .required('Required')
                            .positive('Must be a positive number')
                            .integer('Must be a whole number'),
                        amount_type: Yup.string()
                            .required('Required'),
                        date: Yup.string()
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                        // props.newEntry(props.user.id, values)
                    }}
                >
                    {formik => (
                        <div className={styled.shadowBox}>
                            <h3 className={styled.entryHeader}>Create New Entry</h3>
                            <div className={styled.formContainer}>
                                <form className="form" onSubmit={formik.handleSubmit}>
                                    <Field
                                        className="select-field"
                                        name="child_name"
                                        as="select"
                                    >
                                        {props.children.map((child, index) => (
                                            <option key={index} value={child.name}>{child.name}</option>
                                        ))}
                                    </Field>
                                    <label htmlFor="food_name">Food Name</label>
                                    <input 
                                        name="food_name"
                                        type="text"
                                        {...formik.getFieldProps('food_name')}
                                    />
                                    <label htmlFor="amount">Amount</label>
                                    <input 
                                        name="amount"
                                        type="text"
                                        {...formik.getFieldProps('amount')}
                                    />
                                    <label htmlFor="amount_type">Amount Type</label>
                                    <Field
                                        name="amount_type"
                                        as="select"
                                        className="select-field"
                                        {...formik.getFieldProps('amount_type')}
                                    >
                                        <option value="lbs">lbs</option>
                                        <option value="oz">oz</option>
                                        <option value="grams">grams</option>
                                        <option value="pcs">pcs</option>
                                        <option value="slices">slices</option>
                                        <option value="half">half</option>
                                        <option value="halves">halves</option>
                                    </Field>
                                    <label htmlFor="date">Date</label>
                                    <input 
                                        name="date"
                                        type="date"
                                        {...formik.getFieldProps('date')}
                                    />
                                    <Button variant="outlined" type="sumbit">Submit</Button>
                                </form>
                            </div>
                        </div>
                    )}
                </Formik>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        children: state.user.children,
        user: state.user.user
    }
}

const mapDispatchToProps = {
    newEntry,
    getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry)