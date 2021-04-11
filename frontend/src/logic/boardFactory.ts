import { range } from '../missing'
import { Field, Piece } from './interface'
import { Colour, PieceType } from './piece'

export enum GameType {
    Regular = 'regular',
}
const placePiece = (field: Field, piece: Piece): Field => {
    return {
        ...field,
        piece,
    }
}

export const createBoard = (type: GameType, colour: Colour): Field[] => {
    switch (type) {
        case GameType.Regular: {
            const fields = range(64).map(
                (): Field => ({
                    piece: null,
                    possible: false,
                })
            )

            fields[0] = placePiece(fields[0], {
                type: PieceType.Rook,
                colour: Colour.Black,
            })
            fields[1] = placePiece(fields[1], {
                type: PieceType.Bishop,
                colour: Colour.Black,
            })
            fields[2] = placePiece(fields[2], {
                type: PieceType.Knight,
                colour: Colour.Black,
            })
            fields[3] = placePiece(fields[3], {
                type: PieceType.Queen,
                colour: Colour.Black,
            })
            fields[4] = placePiece(fields[4], {
                type: PieceType.King,
                colour: Colour.Black,
            })
            fields[5] = placePiece(fields[5], {
                type: PieceType.Knight,
                colour: Colour.Black,
            })
            fields[6] = placePiece(fields[6], {
                type: PieceType.Bishop,
                colour: Colour.Black,
            })
            fields[7] = placePiece(fields[7], {
                type: PieceType.Rook,
                colour: Colour.Black,
            })
            fields[8] = placePiece(fields[8], {
                type: PieceType.Pawn,
                colour: Colour.Black,
            })
            fields[9] = placePiece(fields[9], {
                type: PieceType.Pawn,
                colour: Colour.Black,
            })
            fields[10] = placePiece(fields[10], {
                type: PieceType.Pawn,
                colour: Colour.Black,
            })
            fields[11] = placePiece(fields[11], {
                type: PieceType.Pawn,
                colour: Colour.Black,
            })
            fields[12] = placePiece(fields[12], {
                type: PieceType.Pawn,
                colour: Colour.Black,
            })
            fields[13] = placePiece(fields[13], {
                type: PieceType.Pawn,
                colour: Colour.Black,
            })
            fields[14] = placePiece(fields[14], {
                type: PieceType.Pawn,
                colour: Colour.Black,
            })
            fields[15] = placePiece(fields[15], {
                type: PieceType.Pawn,
                colour: Colour.Black,
            })

            fields[48] = placePiece(fields[48], {
                type: PieceType.Pawn,
                colour: Colour.White,
            })
            fields[49] = placePiece(fields[49], {
                type: PieceType.Pawn,
                colour: Colour.White,
            })
            fields[50] = placePiece(fields[50], {
                type: PieceType.Pawn,
                colour: Colour.White,
            })
            fields[51] = placePiece(fields[51], {
                type: PieceType.Pawn,
                colour: Colour.White,
            })
            fields[52] = placePiece(fields[52], {
                type: PieceType.Pawn,
                colour: Colour.White,
            })
            fields[53] = placePiece(fields[53], {
                type: PieceType.Pawn,
                colour: Colour.White,
            })
            fields[54] = placePiece(fields[54], {
                type: PieceType.Pawn,
                colour: Colour.White,
            })
            fields[55] = placePiece(fields[55], {
                type: PieceType.Pawn,
                colour: Colour.White,
            })
            fields[56] = placePiece(fields[56], {
                type: PieceType.Rook,
                colour: Colour.White,
            })
            fields[57] = placePiece(fields[57], {
                type: PieceType.Bishop,
                colour: Colour.White,
            })
            fields[58] = placePiece(fields[58], {
                type: PieceType.Knight,
                colour: Colour.White,
            })
            fields[59] = placePiece(fields[59], {
                type: PieceType.Queen,
                colour: Colour.White,
            })
            fields[60] = placePiece(fields[60], {
                type: PieceType.King,
                colour: Colour.White,
            })
            fields[61] = placePiece(fields[61], {
                type: PieceType.Knight,
                colour: Colour.White,
            })
            fields[62] = placePiece(fields[62], {
                type: PieceType.Bishop,
                colour: Colour.White,
            })
            fields[63] = placePiece(fields[63], {
                type: PieceType.Rook,
                colour: Colour.White,
            })

            return fields
        }
        default:
            throw new Error(`unsupported GameType: ${type}`)
    }
}
