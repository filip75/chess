import React, { useReducer } from 'react'
import { range } from '../../missing'
import { Colour, PieceType } from '../../model/piece'
import FieldComponent from '../fieldComponent'
import { Field, hasPieceColour, isFieldEmpty, Piece } from '../interface'
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
    fields[16] = placePiece(fields[15], {
        type: PieceType.Pawn,
        colour: Colour.White,
    })

    return { fields, marked: null, playerColour: Colour.Black }
}

interface BoardState {
    fields: Field[]
    marked: number | null
    playerColour: Colour
}

interface ActionType {
    type: string
    payload: { index: number }
}

const movePiece = (state: BoardState, from: number, to: number): BoardState => {
    const fieldsCopy: Field[] = state.fields.map((field) => ({ ...field }))
    fieldsCopy[to].piece = fieldsCopy[from].piece
    fieldsCopy[from].piece = null
    return {
        ...state,
        fields: fieldsCopy,
        marked: null,
    }
}

const markField = (state: BoardState, index: number): BoardState => {
    return { ...state, marked: index }
}

const boardReducer = (state: BoardState, action: ActionType): BoardState => {
    switch (action.type) {
        case 'CLICK': {
            const index = action.payload.index
            const field = state.fields[index]

            if (state.marked === null) {
                if (
                    !isFieldEmpty(field) &&
                    hasPieceColour(field.piece, state.playerColour)
                ) {
                    return markField(state, index)
                }
            } else {
                if (isFieldEmpty(field)) {
                    return movePiece(state, state.marked, index)
                } else {
                    if (hasPieceColour(field.piece, state.playerColour)) {
                        return markField(state, index)
                    } else {
                        // TODO handle capture
                    }
                }
            }
            return state
        }
        default:
            throw new Error(`unsupported action: ${action.type}`)
    }
}

const Board: React.FC = (): React.ReactElement => {
    const [board, boardDispatch] = useReducer(boardReducer, null, prepareBoard)

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
                            boardDispatch({ type: 'CLICK', payload: { index } })
                        }
                    />
                )
            )}
        </div>
    )
}
export default Board
