import React from 'react'
import { connect } from 'react-redux'
import { newEntry } from '../redux/actions/EntriesAction'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles({
    shadowBox: {
        width: '35%',
        height: '650px',
        boxShadow: '0 0 8px black',
        margin: '100px auto'
    }
})

function NewEntry(props) {
    const styled = useStyles()

    return (
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
                    .required('Required')
                    .matches(/(oz|lbs|pcs|grams)/, 'Must be a valid weight type: oz, pcs, lbs, etc...'),
                date: Yup.string()
            })}
            onSubmit={(values, { setSubmitting }) => {
                props.newEntry(values)
            }}
        >
            {formik => (
                <div className={styled.shadowBox}>
                    <h3>Create New Entry</h3>
                    <div>
                        <form className="form">
                            <label htmlFor="food_name">Food Name</label>
                            <input 
                                id="food_name"
                                type="text"
                                {...formik.getFieldProps('food_name')}
                            />
                            <label htmlFor="amount">Amount</label>
                            <input 
                                id="amount"
                                type="text"
                                {...formik.getFieldProps('amount')}
                            />
                            <label htmlFor="amount_type">Amount Type</label>
                            <Select
                                id="amount_type"
                            >
                                <MenuItem>lbs</MenuItem>
                                <MenuItem>oz</MenuItem>
                                <MenuItem>grams</MenuItem>
                                <MenuItem>pcs</MenuItem>
                                <MenuItem>half</MenuItem>
                                <MenuItem>halves</MenuItem>
                            </Select>
                        </form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

const mapStateToProps = state => {

}

const mapDispatchToProps = {
    newEntry
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry)