import React from 'react'
import { range } from '../../missing'
import { Colour, Piece, PieceType } from '../../model/piece'
import Field from '../field'
import styles from './style.module.scss'

const Board: React.FC = (): React.ReactElement => {
    const pieces = {
        0: new Piece(PieceType.Rook, Colour.Black),
        1: new Piece(PieceType.Bishop, Colour.Black),
        2: new Piece(PieceType.Knight, Colour.Black),
        3: new Piece(PieceType.Queen, Colour.Black),
        4: new Piece(PieceType.King, Colour.Black),
        5: new Piece(PieceType.Knight, Colour.Black),
        6: new Piece(PieceType.Bishop, Colour.Black),
        7: new Piece(PieceType.Rook, Colour.Black),
        8: new Piece(PieceType.Pawn, Colour.Black),
        9: new Piece(PieceType.Pawn, Colour.Black),
        10: new Piece(PieceType.Pawn, Colour.Black),
        11: new Piece(PieceType.Pawn, Colour.Black),
        12: new Piece(PieceType.Pawn, Colour.Black),
        13: new Piece(PieceType.Pawn, Colour.Black),
        14: new Piece(PieceType.Pawn, Colour.Black),
        15: new Piece(PieceType.Pawn, Colour.Black),
        48: new Piece(PieceType.Pawn, Colour.White),
        49: new Piece(PieceType.Pawn, Colour.White),
        50: new Piece(PieceType.Pawn, Colour.White),
        51: new Piece(PieceType.Pawn, Colour.White),
        52: new Piece(PieceType.Pawn, Colour.White),
        53: new Piece(PieceType.Pawn, Colour.White),
        54: new Piece(PieceType.Pawn, Colour.White),
        55: new Piece(PieceType.Pawn, Colour.White),
        56: new Piece(PieceType.Rook, Colour.White),
        57: new Piece(PieceType.Bishop, Colour.White),
        58: new Piece(PieceType.Knight, Colour.White),
        59: new Piece(PieceType.Queen, Colour.White),
        60: new Piece(PieceType.King, Colour.White),
        61: new Piece(PieceType.Knight, Colour.White),
        62: new Piece(PieceType.Bishop, Colour.White),
        63: new Piece(PieceType.Rook, Colour.White),
    }
    return (
        <div className={styles.board}>
            {range(64).map(
                (n: number): React.ReactElement => (
                    <Field
                        key={n}
                        index={n}
                        piece={n in pieces ? pieces[n] : null}
                    />
                )
            )}
        </div>
    )
}
export default Board
