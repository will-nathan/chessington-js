import Square from '../square';
import Piece from './piece';
import Player from '../player';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
        this.directions = [
          { row: 1, col: 0 },
          { row: -1, col: 0 },  
          { row: 0, col: 1 },  
          { row: 0, col: -1 }
        ];
    }
      getAvailableMoves(board) {
          return this.getAvailableMovesFromDirections(board);
    }
}
