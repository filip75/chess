import { Field } from './interface'
import { getPossible } from './moves'
import { Colour, PieceType } from './piece'

export const cleanPossible = (fields: Field[]): void => {
    fields.forEach((f) => (f.possible = false))
}

const isCheck = (fields: Field[], playerColour: Colour | null): boolean => {
    let check = false
    fields.forEach((field, index) => {
        if (field.piece !== null && field.piece.colour !== playerColour) {
            const possibleCoordinates = getPossible(fields, index)
            possibleCoordinates.forEach((index) => {
                if (
                    fields[index].piece?.type === PieceType.King &&
                    fields[index].piece?.colour === playerColour
                ) {
                    check = true
                }
            })
        }
    })
    return check
}

const movePiece = (fields: Field[], from: number, to: number): Field[] => {
    fields[to].piece = fields[from].piece
    fields[from].piece = null
    return fields
}

const wouldBeCheck = (fields: Field[], from: number, to: number): boolean => {
    const playerColour = fields[from].piece?.colour || null
    const targetPiece = fields[to].piece
    movePiece(fields, from, to)
    const result = isCheck(fields, playerColour)
    movePiece(fields, to, from)
    fields[to].piece = targetPiece
    return result
}

export const markPossible = (fields: Field[], index: number): void => {
    const newCoordinates = getPossible(fields, index).filter((newIndex) => {
        return !wouldBeCheck(fields, index, newIndex)
    })
    cleanPossible(fields)
    newCoordinates.forEach((newIndex) => {
        fields[newIndex].possible = true
    })
}
