import React, { useState } from 'react'
import { range } from '../../missing'
import { Colour, Piece, PieceType } from '../../model/piece'
import FieldComponent from '../fieldComponent'
import styles from './style.module.scss'
import Field from '../../model/field'

const prepareBoard = (): Field[] => {
    const board = range(64).map(() => new Field())
    board[0].piece = new Piece(PieceType.Rook, Colour.Black)
    board[1].piece = new Piece(PieceType.Bishop, Colour.Black)
    board[2].piece = new Piece(PieceType.Knight, Colour.Black)
    board[3].piece = new Piece(PieceType.Queen, Colour.Black)
    board[4].piece = new Piece(PieceType.King, Colour.Black)
    board[5].piece = new Piece(PieceType.Knight, Colour.Black)
    board[6].piece = new Piece(PieceType.Bishop, Colour.Black)
    board[7].piece = new Piece(PieceType.Rook, Colour.Black)
    board[8].piece = new Piece(PieceType.Pawn, Colour.Black)
    board[9].piece = new Piece(PieceType.Pawn, Colour.Black)
    board[10].piece = new Piece(PieceType.Pawn, Colour.Black)
    board[11].piece = new Piece(PieceType.Pawn, Colour.Black)
    board[12].piece = new Piece(PieceType.Pawn, Colour.Black)
    board[13].piece = new Piece(PieceType.Pawn, Colour.Black)
    board[14].piece = new Piece(PieceType.Pawn, Colour.Black)
    board[15].piece = new Piece(PieceType.Pawn, Colour.Black)
    board[48].piece = new Piece(PieceType.Pawn, Colour.White)
    board[49].piece = new Piece(PieceType.Pawn, Colour.White)
    board[50].piece = new Piece(PieceType.Pawn, Colour.White)
    board[51].piece = new Piece(PieceType.Pawn, Colour.White)
    board[52].piece = new Piece(PieceType.Pawn, Colour.White)
    board[53].piece = new Piece(PieceType.Pawn, Colour.White)
    board[54].piece = new Piece(PieceType.Pawn, Colour.White)
    board[55].piece = new Piece(PieceType.Pawn, Colour.White)
    board[56].piece = new Piece(PieceType.Rook, Colour.White)
    board[57].piece = new Piece(PieceType.Bishop, Colour.White)
    board[58].piece = new Piece(PieceType.Knight, Colour.White)
    board[59].piece = new Piece(PieceType.Queen, Colour.White)
    board[60].piece = new Piece(PieceType.King, Colour.White)
    board[61].piece = new Piece(PieceType.Knight, Colour.White)
    board[62].piece = new Piece(PieceType.Bishop, Colour.White)
    board[63].piece = new Piece(PieceType.Rook, Colour.White)
    return board
}

const Board: React.FC = (): React.ReactElement => {
    const [board, setBoard] = useState(prepareBoard())
    const move = (i: number): void => {
        const b = [...board]
        b[i].piece = new Piece(PieceType.Pawn, Colour.White)
        setBoard(b)
        console.log(i)
    }

    return (
        <div className={styles.board}>
            {range(64).map(
                (n: number): React.ReactElement => (
                    <FieldComponent
                        key={n}
                        index={n}
                        piece={board.length > n ? board[n].piece : null}
                        move={move}
                    />
                )
            )}
        </div>
    )
}
export default Board
