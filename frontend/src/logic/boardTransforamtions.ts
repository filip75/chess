import { Coordinates, Field, hasOppositeColour } from './interface'
import { Colour, PieceType } from './piece'

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

const getPossibleCoordinates = (
    fields: Field[],
    index: number
): Coordinates[] => {
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
                        hasOppositeColour(
                            fields[coordinatesToIndex(newCoordinates)].piece,
                            piece.colour
                        )
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
                        if (hasOppositeColour(anotherPiece, piece.colour)) {
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

    return newPositions
}

const isCheck = (fields: Field[], playerColour: Colour | null): boolean => {
    let check = false
    fields.forEach((field, index) => {
        if (field.piece !== null && field.piece.colour !== playerColour) {
            const possibleCoordinates = getPossibleCoordinates(fields, index)
            possibleCoordinates.forEach((position) => {
                if (
                    fields[coordinatesToIndex(position)].piece?.type ===
                        PieceType.King &&
                    fields[coordinatesToIndex(position)].piece?.colour ===
                        playerColour
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
    const newCoordinates = getPossibleCoordinates(fields, index).filter(
        (coordinates) => {
            const newIndex = coordinatesToIndex(coordinates)
            return !wouldBeCheck(fields, index, newIndex)
        }
    )
    cleanPossible(fields)
    newCoordinates.forEach((position) => {
        fields[coordinatesToIndex(position)].possible = true
    })
}
