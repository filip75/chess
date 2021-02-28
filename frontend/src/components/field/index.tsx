import React from 'react'
import styles from './style.module.scss'
import pawn from './pieces/white_pawn.svg'

interface Props {
    index: number
}

const Field: React.FC<Props> = ({ index }: Props): React.ReactElement => {
    return (
        <div className={styles.field} onClick={() => console.log(index)}>
            <div className={styles.content}>
                <img src={pawn} />
            </div>
        </div>
    )
}

export default Field
