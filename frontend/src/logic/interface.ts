import { Colour, PieceType } from './piece'

export interface Piece {
    type: PieceType
    colour: Colour
}
export interface Field {
    piece: Piece | null
    possible: boolean
}

export interface Coordinates {
    row: number
    column: number
}

export function isFieldEmpty(field: Field): boolean {
    return field.piece === null
}

export function isFieldPossibleToMoveTo(field: Field | null): boolean {
    return field?.possible !== true
}

export function hasPieceColour(field: Piece | null, colour: Colour): boolean {
    return field?.colour === colour
}

export function deepCopyFields(fields: Field[]): Field[] {
    return fields.map((field) => ({ ...field }))
}
