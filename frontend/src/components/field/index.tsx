import React from 'react'
import styles from './style.module.scss'
import queen from './pieces/white_queen.png'

interface Props {
    index: number
}

const Field: React.FC<Props> = ({ index }: Props): React.ReactElement => {
    return (
        <div className={styles.field} onClick={() => console.log(index)}>
            <img src={queen} className={styles.piece} />
        </div>
    )
}

export default Field
