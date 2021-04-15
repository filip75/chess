import { Colour, PieceType } from './piece'

export interface Piece {
    type: PieceType
    colour: Colour
}
export interface Field {
    piece: Piece | null
    possible: boolean
}

export function isFieldEmpty(field: Field): boolean {
    return field.piece === null
}

export function isFieldPossibleToMoveTo(field: Field | null): boolean {
    return field?.possible !== true
}

export function hasColour(piece: Piece | null, colour: Colour): boolean {
    return piece?.colour === colour
}

export function hasTheSameColour(
    piece: Piece | null,
    anotherPiece: Piece | null
): boolean {
    return piece?.colour === anotherPiece?.colour
}
export function deepCopyFields(fields: Field[]): Field[] {
    return fields.map((field) => ({ ...field }))
}
