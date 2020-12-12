import React from 'react'
import { Card } from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        width: '25%',
        height: '125px',
        padding: '8px 10px',
        textAlign: 'left',
        backgroundColor: 'lightgray',
        boxShadow: '0 2px 4px black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        fontSize: '24px',
        height: '35px'
    },
    paragraph: {
        fontSize: '18px'
    }
})

export default function ChildCard(props) {
    const styles = useStyles()

    return (
        <Card className={styles.container}>
            <h2 className={styles.header}>Name: {props.child.name}</h2>
            <p className={styles.paragraph}>Age: {props.child.age}</p>
            <p className={styles.paragraph}>Weight: {props.child.weight}</p>
        </Card>
    )
}