import { Piece } from './piece'

class Field {
    piece: Piece | null
    marked: boolean

    constructor(piece: Piece | null = null, marked = false) {
        this.piece = piece
        this.marked = marked
    }
}

export default Field
