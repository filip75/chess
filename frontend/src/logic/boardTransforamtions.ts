import { Coordinates, Field } from './interface'
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

    let newPositions: Coordinates[]

    switch (piece?.type) {
        case PieceType.Knight:
            {
                const rel = [
                    [-2, -1],
                    [-2, 1],
                    [-1, -2],
                    [-1, 2],
                    [1, -2],
                    [1, 2],
                    [2, -1],
                    [2, 1],
                ]
                newPositions = rel.map((r) => ({
                    row: coordinates.row + r[0],
                    column: coordinates.column + r[1],
                }))
            }
            break
        default:
            newPositions = []
    }
    cleanPossible(fields)
    newPositions
        .filter((c) => isWithinBoard(c))
        .forEach((position) => {
            fields[coordinatesToIndex(position)].possible = true
        })
}
