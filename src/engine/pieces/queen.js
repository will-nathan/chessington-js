import Square from '../square';
import Piece from './piece';
import Player from '../player';
import GameSettings from '../gameSettings';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = [
            { row: 1, col: 0 },
            { row: -1, col: 0 },  
            { row: 0, col: 1 },  
            { row: 0, col: -1 },
            { row: -1, col: -1 },
            { row: -1, col: 1 },  
            { row: 1, col: -1 },  
            { row: 1, col: 1 }
            ];
          return this.getAvailableMovesFromDirections(board, directions);
    }
}
