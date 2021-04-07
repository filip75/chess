import { Colour, PieceType } from '../model/piece'

export interface Piece {
    type: PieceType
    colour: Colour
}
export interface Field {
    piece: Piece | null
    possible: boolean
}
