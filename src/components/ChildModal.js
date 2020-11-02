import React from 'react'
import { Modal } from '@material-ui/core'

export default function ChildModal(props, child) {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
        >
            <h2>{child}</h2>
        </Modal>
    )
}
