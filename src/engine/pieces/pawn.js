import Square from '../square';
import Piece from './piece';
import Player from '../player';
import GameSettings from '../gameSettings';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = new Array(0);
        const currentSquare = board.findPiece(this);
        const isWhite  = this.player === Player.WHITE;
        const move = isWhite? 1 : -1;
        const isFirstMove = ((isWhite && currentSquare.row===1) || (!isWhite && currentSquare.row===GameSettings.BOARD_SIZE-2));
        let square = Square.at(currentSquare.row + move, currentSquare.col);
            if (this.checkSquareInRange(square) && board.getPiece(square)===undefined){
                availableMoves.push(square);
                square = Square.at(currentSquare.row + 2*move, currentSquare.col);
                if (isFirstMove && board.getPiece(square)===undefined) {availableMoves.push(square);}
            }
            square = Square.at(currentSquare.row + move, currentSquare.col+1)
            if (this.checkSquareInRange(square) && board.getPiece(square)!==undefined && board.getPiece(square).player!== this.player){
                availableMoves.push(square);
            }
            square = Square.at(currentSquare.row + move, currentSquare.col-1)
            if (this.checkSquareInRange(square) && board.getPiece(square)!==undefined && board.getPiece(square).player!== this.player){
                availableMoves.push(square);
            }
        return availableMoves;
    }
}
