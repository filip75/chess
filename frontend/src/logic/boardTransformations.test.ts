import { range } from '../missing'
import { isCheck } from './boardTransforamtions'
import { Field } from './interface'
import { Colour, PieceType } from './piece'

const emptyBoard = range(64).map(
    (): Field => ({
        piece: null,
        possible: false,
    })
)

test('isCheck', () => {
    const board = [...emptyBoard]
    board[4].piece = { type: PieceType.Rook, colour: Colour.White }
    board[12].piece = { type: PieceType.King, colour: Colour.Black }

    expect(isCheck(board, Colour.Black)).toBe(true)
})
