export interface Coordinates {
    row: number
    column: number
}

export const indexToCoordinates = (
    index: number,
    dimension = 8
): Coordinates => {
    return {
        row: Math.floor(index / dimension),
        column: index % dimension,
    }
}

export const coordinatesToIndex = (
    coordinates: Coordinates,
    dimension = 8
): number => {
    return coordinates.row * dimension + coordinates.column
}

export const coordinatesToIndices = (
    coordinates: Coordinates[],
    dimension = 8
): number[] => {
    return coordinates.map((c) => coordinatesToIndex(c, dimension))
}

export const shiftCoordinates = (
    coordinates: Coordinates,
    shift: Coordinates
): Coordinates => {
    return {
        row: coordinates.row + shift.row,
        column: coordinates.column + shift.column,
    }
}

export const isWithinBoard = (
    coordinate: Coordinates,
    dimension = 8
): boolean => {
    return (
        0 <= coordinate.row &&
        coordinate.row < dimension &&
        0 <= coordinate.column &&
        coordinate.column < dimension
    )
}
