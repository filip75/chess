import React from 'react'
import styles from './style.module.scss'
import { Colour, getImage, PieceType } from '../../model/piece'

interface Props {
    index: number
    pieceType: PieceType | null
    pieceColour: Colour | null
}

const FieldComponent: React.FC<Props> = ({
    index,
    pieceType,
    pieceColour,
}: Props): React.ReactElement => {
    const image = getImage(pieceType, pieceColour)
    return (
        <div className={styles.field}>
            {image && <img src={image} className={styles.piece} />}
        </div>
    )
}

export default FieldComponent
