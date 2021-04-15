import {
    Coordinates,
    coordinatesToIndex,
    coordinatesToIndices,
    indexToCoordinates,
    isWithinBoard,
    shiftCoordinates,
} from './coordinates'
import { Field, hasTheSameColour } from './interface'
import { PieceType } from './piece'

const KNIGHT_SHIFTS = [
    { row: -2, column: -1 },
    { row: -2, column: 1 },
    { row: -1, column: -2 },
    { row: -1, column: 2 },
    { row: 1, column: -2 },
    { row: 1, column: 2 },
    { row: 2, column: -1 },
    { row: 2, column: 1 },
]

const BISHOP_SHIFTS = [
    { row: -1, column: -1 },
    { row: -1, column: 1 },
    { row: 1, column: -1 },
    { row: 1, column: 1 },
]

const ROOK_SHIFTS = [
    { row: -1, column: 0 },
    { row: 0, column: -1 },
    { row: 0, column: 1 },
    { row: 1, column: 0 },
]

const QUEEN_SHIFTS = [...BISHOP_SHIFTS, ...ROOK_SHIFTS]

export const getPossible = (fields: Field[], index: number): number[] => {
    const piece = fields[index].piece
    switch (piece?.type) {
        case PieceType.Knight:
            return coordinatesToIndices(
                getKnightPossible(fields, indexToCoordinates(index))
            )
        case PieceType.Bishop:
            return coordinatesToIndices(
                getPossibleWithShifts(
                    fields,
                    indexToCoordinates(index),
                    BISHOP_SHIFTS
                )
            )
        case PieceType.Rook:
            return coordinatesToIndices(
                getPossibleWithShifts(
                    fields,
                    indexToCoordinates(index),
                    ROOK_SHIFTS
                )
            )
        case PieceType.Queen:
            return coordinatesToIndices(
                getPossibleWithShifts(
                    fields,
                    indexToCoordinates(index),
                    QUEEN_SHIFTS
                )
            )
    }
    return []
}

const getPossibleWithShifts = (
    fields: Field[],
    coordinates: Coordinates,
    shifts: Coordinates[]
): Coordinates[] => {
    const newPositions: Coordinates[] = []
    const piece = fields[coordinatesToIndex(coordinates)].piece

    shifts.forEach((shift) => {
        let newCoordinates = shiftCoordinates(coordinates, shift)
        while (
            isWithinBoard(newCoordinates) &&
            !hasTheSameColour(
                fields[coordinatesToIndex(newCoordinates)].piece,
                piece
            )
        ) {
            const anotherPiece =
                fields[coordinatesToIndex(newCoordinates)].piece
            if (anotherPiece !== null) {
                if (!hasTheSameColour(anotherPiece, piece)) {
                    newPositions.push(newCoordinates)
                }
                break
            } else {
                newPositions.push(newCoordinates)
            }
            newCoordinates = shiftCoordinates(newCoordinates, shift)
        }
    })
    return newPositions
}

const getKnightPossible = (
    fields: Field[],
    coordinates: Coordinates
): Coordinates[] => {
    const newPositions: Coordinates[] = []
    const piece = fields[coordinatesToIndex(coordinates)].piece
    KNIGHT_SHIFTS.forEach((shift) => {
        const newCoordinates = shiftCoordinates(coordinates, shift)
        if (
            isWithinBoard(newCoordinates) &&
            !hasTheSameColour(
                fields[coordinatesToIndex(newCoordinates)].piece,
                piece
            )
        ) {
            newPositions.push(newCoordinates)
        }
    })
    return newPositions
}
