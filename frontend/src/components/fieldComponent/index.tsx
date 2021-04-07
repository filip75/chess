import React from 'react'
import styles from './style.module.scss'
import { getImage } from '../../model/piece'
import { Piece } from '../interface'

interface Props {
    index: number
    piece: Piece | null
    marked: boolean
    onClick: (index: number) => void
}

const FieldComponent: React.FC<Props> = ({
    index,
    piece,
    marked,
    onClick,
}: Props): React.ReactElement => {
    const image = getImage(piece)
    return (
        <div
            className={`${styles.field} ${marked ? styles.marked : ''}`}
            onClick={() => onClick(index)}
        >
            {image && <img src={image} className={styles.piece} />}
        </div>
    )
}

export default FieldComponent
