import React from 'react'
import styles from './style.module.scss'
import { Piece } from '../../model/piece'

interface Props {
    index: number
    piece: Piece
}

const Field: React.FC<Props> = ({
    index,
    piece,
}: Props): React.ReactElement => {
    return (
        <div className={styles.field} onClick={() => console.log(index)}>
            {piece && <img src={piece.getImage()} className={styles.piece} />}
        </div>
    )
}

export default Field
