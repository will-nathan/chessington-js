import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
        this.directions = [
            { row: 2, col: -1 },
            { row: 2, col: 1 },  
            { row: 1, col: 2 },  
            { row: -1, col: 2 },
            { row: -2, col: -1 },
            { row: -2, col: 1 },  
            { row: 1, col: -2 },  
            { row: -1, col: -2 }
          ];
    }

        getAvailableMoves(board) {
            return this.getAvailableMovesFromDirections(board, true);
    }
}
