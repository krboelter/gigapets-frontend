import React from 'react'
import { Card } from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        textAlign: 'left',
        backgroundColor: 'gray'
    },
    header: {
        fontSize: '30px',
        width: '25%',
        height: '300px'
    },
    paragraph: {
        fontSize: '20px'
    }
})

export default function ChildCard(props) {
    const styles = useStyles()

    return (
        <Card className={styles.container}>
            <h2 className={styled.header}>{props.child.name}</h2>
            <p className={styled.paragraph}>{props.child.age}</p>
            <p>{props.child.weight}</p>
        </Card>
    )
}