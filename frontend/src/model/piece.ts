import images from './pieces'

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

export class Piece {
    colour: Colour
    type: PieceType

    constructor(type: PieceType, colour: Colour) {
        this.type = type
        this.colour = colour
    }

    getImage() {
        return images[`${this.colour}_${this.type}`]
    }
}
