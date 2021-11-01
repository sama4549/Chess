// Imports
import { Check } from './check.js';

let currentTurn;
const check = new Check();

export default class Continue {

    updatePieces(turn, listenForClick) {
        currentTurn = turn;
        for(let i = 0; i < 64; i++) {
            // Reset all event listeners to allow for moving pieces more than once
            board.children[i].removeEventListener('click', this.selectPiece);
            board.children[i].removeEventListener('click', listenForClick);

            // This code will reset the board and guarantee that all of the highlighted squares are turned off
            if(board.children[i].classList.contains('available')) {
                board.children[i].classList.remove('available');
            }
            if(board.children[i].classList.contains('selected')) {
                board.children[i].classList.remove('selected');
            }
            if(board.children[i].classList.contains('attackable')) {
                board.children[i].classList.remove('attackable');
            }

            // Update Black Pieces
            if(board.children[i].classList.contains("black-rook")) {
                board.children[i].innerHTML = '&#9820';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else if(board.children[i].classList.contains("black-knight")) {
                board.children[i].innerHTML = '&#9822';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else if(board.children[i].classList.contains("black-bishop")) {
                board.children[i].innerHTML = '&#9821';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else if(board.children[i].classList.contains("black-queen")) {
                board.children[i].innerHTML = '&#9819';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else if(board.children[i].classList.contains("black-king")) {
                board.children[i].innerHTML = '&#9818';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else if(board.children[i].classList.contains("black-pawn")) {
                board.children[i].innerHTML = '&#9823';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }

            // Update White Pieces
            else if(board.children[i].classList.contains("white-rook")) {
                board.children[i].innerHTML = '&#9814';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else if(board.children[i].classList.contains("white-knight")) {
                board.children[i].innerHTML = '&#9816';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else if(board.children[i].classList.contains("white-bishop")) {
                board.children[i].innerHTML = '&#9815';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else if(board.children[i].classList.contains("white-queen")) {
                board.children[i].innerHTML = '&#9813';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else if(board.children[i].classList.contains("white-king")) {
                board.children[i].innerHTML = '&#9812';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else if(board.children[i].classList.contains("white-pawn")) {
                board.children[i].innerHTML = '&#9817';
                board.children[i].className += ' hoverable';
                board.children[i].addEventListener('click', this.selectPiece);
            }
            else {
                board.children[i].addEventListener('click', this.selectNone);
            }
        }

    }

    // De-select all squares
    selectNone() {
        for (let i = 0; i < 63; i++) {
            setTimeout( () => {board.children[i].classList.remove('selected')} , 10);
            setTimeout( () => {board.children[i].classList.remove('available')} , 10);
            setTimeout( () => {board.children[i].classList.remove('attackable')} , 10);
        }
    }

    // Light up selected piece
    selectPiece(e) {
        let selected = e.target;
        setTimeout( () => {
            for (let i = 0; i < 64; i++) {
                board.children[i].classList.remove('selected');
                board.children[i].classList.remove('available');
    
                if(currentTurn === 'white') {
                    if(selected.classList.contains('white-piece')) {
                        selected.classList.add('selected');
                        // Check Pawns
                        if(selected.classList.contains('white-pawn')) {
                            check.whitePawn(selected);
                        }
                        // Check Knights
                        if(selected.classList.contains('white-knight')) {
                            check.whiteKnight(selected);
                        }
                        // Check Bishops
                        if(selected.classList.contains('white-bishop')) {
                            check.whiteBishop(selected);
                        }
                        // Check King
                        if(selected.classList.contains('white-king')) {
                            check.whiteKing(selected);
                        }

                        // Check Rook
                        if(selected.classList.contains('white-rook')) {
                            check.whiteRook(selected);
                        }

                        // Check Queen
                        if(selected.classList.contains('white-queen')) {
                            check.whiteQueen(selected);
                        }
                    }
                }
    
                if(currentTurn === 'black') {
                    if(selected.classList.contains('black-piece')) {
                        selected.classList.add('selected');
                        // Check Pawns
                        if(selected.classList.contains('black-pawn')) {
                            check.blackPawn(selected);
                        }
                        // Check Knights
                        if(selected.classList.contains('black-knight')) {
                            check.blackKnight(selected);
                        }
                        // Check Bishops
                        if(selected.classList.contains('black-bishop')) {
                            check.blackBishop(selected);
                        }
                        // Check King
                        if(selected.classList.contains('black-king')) {
                            check.blackKing(selected);
                        }

                        // Check Rook
                        if(selected.classList.contains('black-rook')) {
                            check.blackRook(selected);
                        }

                        // Check Queen
                        if(selected.classList.contains('black-queen')) {
                            check.blackQueen(selected);
                        }
                    }
                }
            }
        }, 10);
    }
}