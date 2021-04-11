import { Colour, PieceType } from '../model/piece'

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

export function isFieldPossibleToMoveTo(field: Field| null): boolean {
    return field?.possible !== true
}

export function hasPieceColour(field: Piece | null, colour: Colour): boolean {
    return field?.colour === colour
}
