import React, { useReducer } from 'react'
import { createBoard, GameType } from '../../logic/boardFactory'
import { cleanPossible, markPossible } from '../../logic/boardTransforamtions'
import {
    deepCopyFields,
    Field,
    hasColour,
    isFieldEmpty,
} from '../../logic/interface'
import { Colour } from '../../logic/piece'
import { range } from '../../missing'
import FieldComponent from '../fieldComponent'
import styles from './style.module.scss'

const prepareBoard = (colour: Colour): BoardState => {
    return {
        fields: createBoard(GameType.Regular, colour),
        marked: null,
        playerColour: colour,
    }
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
    const fieldsCopy = deepCopyFields(state.fields)
    fieldsCopy[to].piece = fieldsCopy[from].piece
    fieldsCopy[from].piece = null
    cleanPossible(fieldsCopy)
    return {
        ...state,
        fields: fieldsCopy,
        marked: null,
    }
}

const markField = (state: BoardState, index: number | null): BoardState => {
    if (index !== null) {
        const fieldsCopy = deepCopyFields(state.fields)
        markPossible(fieldsCopy, index)
        return { ...state, fields: fieldsCopy, marked: index }
    } else {
        return { ...state, marked: index }
    }
}

const boardReducer = (state: BoardState, action: ActionType): BoardState => {
    switch (action.type) {
        case 'CLICK': {
            const index = action.payload.index
            const field = state.fields[index]

            if (state.marked === null) {
                if (
                    !isFieldEmpty(field) &&
                    hasColour(field.piece, state.playerColour)
                ) {
                    return markField(state, index)
                }
            } else {
                if (isFieldEmpty(field)) {
                    return movePiece(state, state.marked, index)
                } else {
                    if (hasColour(field.piece, state.playerColour)) {
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
    const [board, boardDispatch] = useReducer(
        boardReducer,
        Colour.Black,
        prepareBoard
    )

    return (
        <div className={styles.board}>
            {range(board.fields.length).map(
                (n: number): React.ReactElement => (
                    <FieldComponent
                        key={n}
                        index={n}
                        piece={board.fields[n].piece}
                        marked={
                            board.marked !== null ? board.marked === n : false
                        }
                        possible={board.fields[n].possible}
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
