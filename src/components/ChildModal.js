import React from 'react'
import { Modal } from '@material-ui/core'

export default function ChildModal(props) {
    return (
        <Modal
            open={props.open}
            onClose={props.toggleModal}
        >
            <h2>{props.child.name}</h2>
            <p>{props.child.weight}</p>
            <p>{props.child.age}</p>
        </Modal>
    )
}
