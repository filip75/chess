import React from 'react'
import styles from './style.module.scss'
import { getImage } from '../../logic/piece'
import { Piece } from '../../logic/interface'

interface Props {
    index: number
    piece: Piece | null
    marked: boolean
    possible: boolean
    onClick: (index: number) => void
}

const FieldComponent: React.FC<Props> = ({
    index,
    piece,
    marked,
    possible,
    onClick,
}: Props): React.ReactElement => {
    const image = getImage(piece)
    return (
        <div
            className={`${styles.field} ${marked ? styles.marked : ''} ${
                possible ? styles.possible : ''
            }`}
            onClick={() => onClick(index)}
        >
            {image && <img src={image} className={styles.piece} />} {index}
        </div>
    )
}

export default FieldComponent
