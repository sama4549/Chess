// Imports
import Continue from './update.js';
import { Check } from './check.js';

// Variables
const startButton = document.getElementById('start-button');
const startGame = document.getElementById('start-game');
const board = document.getElementById('board');
export let currentTurn = 'white';
let screenTurn = document.getElementById('current-turn');

// Event Listeners
startButton.addEventListener('click', init);

// Initialize Board Piece
function init() {
    startGame.style.display = 'none';
    board.style.display = 'grid';
    createBoard();
}

export const playGame = new Continue;

// Function to Create the Board
function createBoard() {
    let spaces = 64;
    let chessSpaces = [];

    for(let i = 0; i < spaces; i++) {
        let space = new ChessBoard(i);
        chessSpaces.push(space);
    }

    // Create Board
    const finishedBoard = new ChessBoard();
    finishedBoard.createSpots(chessSpaces);
    finishedBoard.createPieces();

    // Refresh Pieces
    updateBoard();
}

// Refresh Pieces
export function updateBoard() {
    playGame.updatePieces(currentTurn);
}



// Board Space Creater Constructor
class ChessBoard {
    constructor(id) {
        this.id = id;
    }

    createSpots(spaceArray) {
        spaceArray.forEach(space => {
            let newElement = document.createElement('div');
            newElement.id = space.id;
            board.appendChild(newElement);
            let newElementId = Number(newElement.id);

            // Create If Statement to Determine which spots are black. Each If statement is a new row.
            if(newElementId > 0 && newElementId < 9 && newElementId % 2 === 1) {
                newElement.className = 'black';
            }
            if(newElementId > 7 && newElementId < 16 && newElementId % 2 === 0) {
                newElement.className = 'black';
            }
            if(newElementId > 15 && newElementId < 24 && newElementId % 2 === 1) {
                newElement.className = 'black';
            }
            if(newElementId > 22 && newElementId < 32 && newElementId % 2 === 0) {
                newElement.className = 'black';
            }
            if(newElementId > 31 && newElementId < 40 && newElementId % 2 === 1) {
                newElement.className = 'black';
            }
            if(newElementId > 38 && newElementId < 48 && newElementId % 2 === 0) {
                newElement.className = 'black';
            }
            if(newElementId > 47 && newElementId < 56 && newElementId % 2 === 1) {
                newElement.className = 'black';
            }
            if(newElementId > 55 && newElementId < 64 && newElementId % 2 === 0) {
                newElement.className = 'black';
            }
        })
    }

    createPieces() {
        // Create Black Pieces
        document.getElementById('0').className += ' black-rook black-piece';
        document.getElementById('1').className += ' black-knight black-piece';
        document.getElementById('2').className += ' black-bishop black-piece';
        document.getElementById('3').className += ' black-queen black-piece';
        document.getElementById('4').className += ' black-king black-piece';
        document.getElementById('5').className += ' black-bishop black-piece';
        document.getElementById('6').className += ' black-knight black-piece';
        document.getElementById('7').className += ' black-rook black-piece';
        document.getElementById('8').className += ' black-pawn black-piece start';
        document.getElementById('9').className += ' black-pawn black-piece start';
        document.getElementById('10').className += ' black-pawn black-piece start';
        document.getElementById('11').className += ' black-pawn black-piece start';
        document.getElementById('12').className += ' black-pawn black-piece start';
        document.getElementById('13').className += ' black-pawn black-piece start';
        document.getElementById('14').className += ' black-pawn black-piece start';
        document.getElementById('15').className += ' black-pawn black-piece start';

        // Create White Pieces
        document.getElementById('48').className += ' white-pawn white-piece start';
        document.getElementById('49').className += ' white-pawn white-piece start';
        document.getElementById('50').className += ' white-pawn white-piece start';
        document.getElementById('51').className += ' white-pawn white-piece start';
        document.getElementById('52').className += ' white-pawn white-piece start';
        document.getElementById('53').className += ' white-pawn white-piece start';
        document.getElementById('54').className += ' white-pawn white-piece start';
        document.getElementById('55').className += ' white-pawn white-piece start';
        document.getElementById('56').className += ' white-rook white-piece';
        document.getElementById('57').className += ' white-knight white-piece';
        document.getElementById('58').className += ' white-bishop white-piece';
        document.getElementById('59').className += ' white-queen white-piece';
        document.getElementById('60').className += ' white-king white-piece';
        document.getElementById('61').className += ' white-bishop white-piece';
        document.getElementById('62').className += ' white-knight white-piece';
        document.getElementById('63').className += ' white-rook white-piece';
    }
}

export default function updateTurn() {
    if(currentTurn == 'black') {
        currentTurn = 'white';
        screenTurn.innerText = 'black';
    } else if (currentTurn == 'white') {
        currentTurn = 'black';
        screenTurn.innerText = 'white';
    }
}