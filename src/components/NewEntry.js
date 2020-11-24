import React from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../redux/actions/EntriesAction'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'

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
                props.addEntry(values)
            }}
        >
            {formik => (
                <div className={styled.shadowBox}>

                </div>
            )}
        </Formik>
    )
}

const mapStateToProps = state => {

}

const mapDispatchToProps = {
    addEntry
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry)