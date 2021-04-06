import React, { useReducer } from 'react'
import { range } from '../../missing'
import { Colour, PieceType } from '../../model/piece'
import FieldComponent from '../fieldComponent'
import { Field } from '../interface'
import styles from './style.module.scss'

const placePiece = (
    field: Field,
    pieceType: PieceType,
    pieceColour: Colour
): Field => {
    return {
        ...field,
        pieceType,
        pieceColour,
    }
}

const prepareBoard = (): BoardState => {
    const fields = range(64).map(
        (): Field => ({
            pieceType: null,
            pieceColour: null,
            marked: false,
            possible: false,
        })
    )

    fields[0] = placePiece(fields[0], PieceType.Rook, Colour.Black)
    fields[1] = placePiece(fields[1], PieceType.Bishop, Colour.Black)
    fields[2] = placePiece(fields[2], PieceType.Knight, Colour.Black)
    fields[3] = placePiece(fields[3], PieceType.Queen, Colour.Black)
    fields[4] = placePiece(fields[4], PieceType.King, Colour.Black)
    fields[5] = placePiece(fields[5], PieceType.Knight, Colour.Black)
    fields[6] = placePiece(fields[6], PieceType.Bishop, Colour.Black)
    fields[7] = placePiece(fields[7], PieceType.Rook, Colour.Black)
    fields[8] = placePiece(fields[8], PieceType.Pawn, Colour.Black)
    fields[9] = placePiece(fields[9], PieceType.Pawn, Colour.Black)
    fields[10] = placePiece(fields[10], PieceType.Pawn, Colour.Black)
    fields[11] = placePiece(fields[11], PieceType.Pawn, Colour.Black)
    fields[12] = placePiece(fields[12], PieceType.Pawn, Colour.Black)
    fields[13] = placePiece(fields[13], PieceType.Pawn, Colour.Black)
    fields[14] = placePiece(fields[14], PieceType.Pawn, Colour.Black)
    fields[15] = placePiece(fields[15], PieceType.Pawn, Colour.Black)

    return { fields, marked: false }
}

interface BoardState {
    fields: Field[]
    marked: boolean
}

interface ActionType {
    type: string
    payload: any // TODO set proper type
}

const boardReducer = (state: BoardState, action: ActionType): BoardState => {
    switch (action.type) {
        case 'MARK': {
            const f: Field = {
                ...state.fields[action.payload.index],
                marked: true,
            }
            const fields = [...state.fields]
            fields[action.payload.index] = f
            return { ...state, fields }
        }

        default:
            throw new Error(`unsupported action: ${action.type}`)
    }
}

const Board: React.FC = (): React.ReactElement => {
    const [board, boardDispatch] = useReducer(boardReducer, prepareBoard())

    return (
        <div className={styles.board}>
            {range(64).map(
                (n: number): React.ReactElement => (
                    <FieldComponent
                        key={n}
                        index={n}
                        pieceType={board.fields[n].pieceType}
                        pieceColour={board.fields[n].pieceColour}
                        marked={board.fields[n].marked}
                        onClick={(index: number) =>
                            boardDispatch({ type: 'MARK', payload: { index } })
                        }
                    />
                )
            )}
        </div>
    )
}
export default Board
