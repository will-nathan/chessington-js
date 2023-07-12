import Square from '../square';
import Piece from './piece';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = new Array(0);
        const currentSquare = board.findPiece(this);
        const move = this.player === Player.WHITE ? 1 : -1;
        /* let move;
        if (this.player == Player.WHITE) {
            move = 1
        }
        if (this.player == Player.BLACK) {
            move = -1
        } */
        let square = Square.at(currentSquare.row + move, currentSquare.col);
        if (board.getPiece(square)===undefined){availableMoves.push(square);}

        return availableMoves
    }
}
