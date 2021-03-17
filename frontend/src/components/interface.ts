import { Colour, PieceType } from '../model/piece'

export interface Field {
    pieceType: PieceType | null
    pieceColour: Colour | null
    marked: boolean
    possible: boolean
}
