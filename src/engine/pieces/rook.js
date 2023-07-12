import Square from '../square';
import Piece from './piece';
import Player from '../player';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = new Array(0);
        const currentSquare = board.findPiece(this);
        let square
        for (let i=0; i<GameSettings.BOARD_SIZE; i++) {
            square = Square.at(currentSquare.row, i);
            if (board.getPiece(square)===undefined){availableMoves.push(square);}
            square = Square.at(i, currentSquare.col);
            if (board.getPiece(square)===undefined){availableMoves.push(square);}
        }
        return availableMoves
    }
}
