import { Piece } from './interface'
import images from './piecesImages'

export enum Colour {
    Black = 'black',
    White = 'white',
}

export enum PieceType {
    Pawn = 'pawn',
    Rook = 'rook',
    Knight = 'knight',
    Bishop = 'bishop',
    Queen = 'queen',
    King = 'king',
}

export const getImage = (piece: Piece | null): string | null => {
    return piece && images[`${piece.colour}_${piece.type}`]
}
