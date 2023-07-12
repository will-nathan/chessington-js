import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        const directions = [
          { row: -1, col: -1 },
          { row: -1, col: 1 },  
          { row: 1, col: -1 },  
          { row: 1, col: 1 }
        ];
      
        return this.getAvailableMovesFromDirections(board, directions);
    }
}


