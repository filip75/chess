import { Coordinates, Field, Piece } from './interface'
import { PieceType } from './piece'

const indexToCoordinates = (index: number, dimension = 8): Coordinates => {
    return {
        row: Math.floor(index / dimension),
        column: index % dimension,
    }
}

const coordinatesToIndex = (coordinate: Coordinates, dimension = 8): number => {
    return coordinate.row * dimension + coordinate.column
}

const shiftCoordinates = (
    coordinates: Coordinates,
    shift: Coordinates
): Coordinates => {
    return {
        row: coordinates.row + shift.row,
        column: coordinates.column + shift.column,
    }
}

const isWithinBoard = (coordinate: Coordinates, dimension = 8): boolean => {
    return (
        0 <= coordinate.row &&
        coordinate.row < dimension &&
        0 <= coordinate.column &&
        coordinate.column < dimension
    )
}

export const cleanPossible = (fields: Field[]): void => {
    fields.forEach((f) => (f.possible = false))
}

export const markPossible = (fields: Field[], index: number): void => {
    const piece = fields[index].piece
    const coordinates = indexToCoordinates(index)

    const newPositions: Coordinates[] = []

    switch (piece?.type) {
        case PieceType.Knight:
            {
                const shifts = [
                    { row: -2, column: -1 },
                    { row: -2, column: 1 },
                    { row: -1, column: -2 },
                    { row: -1, column: 2 },
                    { row: 1, column: -2 },
                    { row: 1, column: 2 },
                    { row: 2, column: -1 },
                    { row: 2, column: 1 },
                ]

                let newCoordinates: Coordinates
                shifts.forEach((shift) => {
                    newCoordinates = shiftCoordinates(coordinates, shift)
                    if (
                        isWithinBoard(newCoordinates) &&
                        fields[coordinatesToIndex(newCoordinates)].piece
                            ?.colour !== piece.colour
                    ) {
                        newPositions.push(newCoordinates)
                    }
                })
            }
            break

        case PieceType.Bishop: {
            const shifts = [
                { row: -1, column: -1 },
                { row: -1, column: 1 },
                { row: 1, column: -1 },
                { row: 1, column: 1 },
            ]

            let newCoordinates: Coordinates
            let anotherPiece
            shifts.forEach((shift) => {
                newCoordinates = shiftCoordinates(coordinates, shift)
                while (
                    isWithinBoard(newCoordinates) &&
                    fields[coordinatesToIndex(newCoordinates)].piece?.colour !==
                        piece.colour
                ) {
                    anotherPiece =
                        fields[coordinatesToIndex(newCoordinates)].piece
                    if (anotherPiece !== null) {
                        if (anotherPiece.colour !== piece.colour) {
                            newPositions.push(newCoordinates)
                        }
                        break
                    } else {
                        newPositions.push(newCoordinates)
                    }
                    newCoordinates = shiftCoordinates(newCoordinates, shift)
                }
            })
            break
        }
    }
    cleanPossible(fields)
    newPositions
        .filter((c) => isWithinBoard(c))
        .forEach((position) => {
            fields[coordinatesToIndex(position)].possible = true
        })
}
