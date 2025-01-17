import Square from '../square';
import Player from '../player';
import GameSettings from '../gameSettings';

export default class Piece {
    constructor(player) {
        this.player = player;
        this.directions = []
    }

    
    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
       
    }

    checkSquareInRange(square) {
        return (square.row >= 0 && square.row < GameSettings.BOARD_SIZE && square.col >= 0 && square.col < GameSettings.BOARD_SIZE)
    }

   

    getAvailableMovesFromDirections(board, onlyOnce = false) {
        let availableMoves = new Array(0);
        const currentSquare = board.findPiece(this);
          let square
          for (const direction of this.directions) {
              square = Square.at(currentSquare.row+direction.row, currentSquare.col+direction.col)
              while (this.checkSquareInRange(square)) {
                  if (board.getPiece(square)===undefined){
                    availableMoves.push(square);
                    if (onlyOnce == true) {break}
                } else if (board.getPiece(square).player!== this.player) {
                    availableMoves.push(square)
                    break;
                } else {break};
                  square = Square.at(square.row + direction.row, square.col + direction.col);
              }
          }
          return availableMoves
}
}
