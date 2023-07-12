import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
        this.directions = [
            { row: 1, col: 0 },
            { row: -1, col: 0 },  
            { row: 1, col: 1 },  
            { row: -1, col: 1 },
            { row: 1, col: -1 },
            { row: -1, col: -1 },  
            { row: 0, col: 1 },  
            { row: 0, col: -1 }
          ];
    }

        getAvailableMoves(board) {
            return this.getAvailableMovesFromDirections(board, true);
    
    }
}
