import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import King from './pieces/king';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
        console.log('Creating board')
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }

    findKing(player) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] instanceof King && this.board[row][col].player===player) {
                    console.log(`found king at square ${row}, ${col}`)
                    return Square.at(row, col);
                }
            }
        }
        //return Square.at(0,0)
        throw new Error('The supplied piece is not on the board');
    }

    inCheck(isWhite) {
        let player;
        let opponent;
        if (isWhite) {
            player = Player.WHITE;
            opponent = Player.BLACK;
        } else {
            player = Player.BLACK;
            opponent = Player.WHITE;
        }
        let kingSquare = this.findKing(opponent);
        let square;
        for (let i=0; i < GameSettings.BOARD_SIZE; i++) {
            for (let j=0; j < GameSettings.BOARD_SIZE; j++) {
                square = Square.at(i,j);
                const possiblePiece = this.getPiece(square);
            if (possiblePiece !== undefined && possiblePiece.player == player) {

                const trueFalse = possiblePiece.getAvailableMoves(this).map(square => {return (square.row==kingSquare.row && square.col == kingSquare.col)})
                if (trueFalse.includes(true)){
                    return true
                }               
            }
            }
        }
        return false
    } 
}
