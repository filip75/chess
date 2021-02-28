import React from 'react'
import styles from './style.module.scss'

interface Props {
    index: number
}

const Field: React.FC<Props> = ({ index }: Props): React.ReactElement => {
    return (
        <div className={styles.field} onClick={() => console.log(index)}></div>
    )
}

export default Field
