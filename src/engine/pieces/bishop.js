import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = new Array(0);
        const currentSquare = board.findPiece(this);

        const directions = [
          { row: -1, col: -1 },
          { row: -1, col: 1 },  
          { row: 1, col: -1 },  
          { row: 1, col: 1 }
        ];
        let square
        for (const direction of directions) {
            square = Square.at(currentSquare.row+direction.row, currentSquare.col+direction.col)
            while (square.row >= 0 && square.row < GameSettings.BOARD_SIZE && square.col >= 0 && square.col < GameSettings.BOARD_SIZE) {
                if (board.getPiece(square)===undefined){availableMoves.push(square);} else {break}
                square = Square.at(square.row + direction.row, square.col + direction.col);
            }
        }
      
        return availableMoves;
    }
}


