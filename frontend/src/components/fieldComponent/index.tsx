import React from 'react'
import styles from './style.module.scss'
import { Piece } from '../../model/piece'

interface Props {
    index: number
    piece: Piece | null
    move: (i: number) => void
}

const FieldComponent: React.FC<Props> = ({
    index,
    piece,
    move,
}: Props): React.ReactElement => {
    return (
        <div className={styles.field} onClick={() => move(index)}>
            {piece && <img src={piece.getImage()} className={styles.piece} />}
        </div>
    )
}

export default FieldComponent
