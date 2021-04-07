import React, { useReducer } from 'react'
import { range } from '../../missing'
import { Colour, PieceType } from '../../model/piece'
import FieldComponent from '../fieldComponent'
import { Field, Piece } from '../interface'
import styles from './style.module.scss'

const placePiece = (field: Field, piece: Piece): Field => {
    return {
        ...field,
        piece,
    }
}

const prepareBoard = (): BoardState => {
    const fields = range(64).map(
        (): Field => ({
            piece: null,
            possible: false,
        })
    )

    fields[0] = placePiece(fields[0], {
        type: PieceType.Rook,
        colour: Colour.Black,
    })
    fields[1] = placePiece(fields[1], {
        type: PieceType.Bishop,
        colour: Colour.Black,
    })
    fields[2] = placePiece(fields[2], {
        type: PieceType.Knight,
        colour: Colour.Black,
    })
    fields[3] = placePiece(fields[3], {
        type: PieceType.Queen,
        colour: Colour.Black,
    })
    fields[4] = placePiece(fields[4], {
        type: PieceType.King,
        colour: Colour.Black,
    })
    fields[5] = placePiece(fields[5], {
        type: PieceType.Knight,
        colour: Colour.Black,
    })
    fields[6] = placePiece(fields[6], {
        type: PieceType.Bishop,
        colour: Colour.Black,
    })
    fields[7] = placePiece(fields[7], {
        type: PieceType.Rook,
        colour: Colour.Black,
    })
    fields[8] = placePiece(fields[8], {
        type: PieceType.Pawn,
        colour: Colour.Black,
    })
    fields[9] = placePiece(fields[9], {
        type: PieceType.Pawn,
        colour: Colour.Black,
    })
    fields[10] = placePiece(fields[10], {
        type: PieceType.Pawn,
        colour: Colour.Black,
    })
    fields[11] = placePiece(fields[11], {
        type: PieceType.Pawn,
        colour: Colour.Black,
    })
    fields[12] = placePiece(fields[12], {
        type: PieceType.Pawn,
        colour: Colour.Black,
    })
    fields[13] = placePiece(fields[13], {
        type: PieceType.Pawn,
        colour: Colour.Black,
    })
    fields[14] = placePiece(fields[14], {
        type: PieceType.Pawn,
        colour: Colour.Black,
    })
    fields[15] = placePiece(fields[15], {
        type: PieceType.Pawn,
        colour: Colour.Black,
    })

    return { fields, marked: null }
}

interface BoardState {
    fields: Field[]
    marked: number | null
}

interface ActionType {
    type: string
    payload: any // TODO set proper type
}

const boardReducer = (state: BoardState, action: ActionType): BoardState => {
    switch (action.type) {
        case 'MARK': {
            const index: number = action.payload.index
            const f: Field = {
                ...state.fields[action.payload.index],
            }
            const fields = [...state.fields]
            fields[action.payload.index] = f
            return { ...state, fields, marked: index }
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
                        piece={board.fields[n].piece}
                        marked={board.marked ? board.marked === n : false}
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
