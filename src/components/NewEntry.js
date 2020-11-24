import React from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../redux/actions/EntriesAction'
import { Formik } from 'formik'

function NewEntry(props) {
    return (
        <div>
            Hello from NewEntry
        </div>
    )
}

const mapStateToProps = state => {

}

const mapDispatchToProps = {
    addEntry
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntry)