import { updateBoard, currentTurn, playGame } from "./main.js";

export class Check {
    // Light up available sections & move pieces upon clicks
    whitePawn(selected) {
        console.log(selected);
        const spotId = selected.id;
        const availableIds = [spotId - 8 , spotId - 16];
        for (let i = 0; i < 64; i++) {
            const elementId = document.getElementById(i).id;
            const availableIdOne = availableIds[0];
            const availableIdTwo = availableIds[1];

            // Move Pieces
            if(elementId == availableIdOne && selected.classList.contains('selected')) {
                board.children[availableIdOne].classList.add('available');
                // Event listener to allow for moving pieces
                board.children[availableIdOne].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-pawn', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-pawn hoverable white-piece';
                        playGame.updatePieces(currentTurn);
                    } else {
                        return;
                    }
                });
            }

            if(spotId !== 48 && spotId !== 49 && spotId !== 50 && spotId !== 51 && spotId !== 52 && spotId !== 53 && spotId !== 54 && spotId !== 55) {
                if(elementId == availableIdTwo) {
                    board.children[availableIdTwo].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdTwo].addEventListener('click', function listenForClick(e) {
                        if(board.children[spotId].classList.contains('selected')) {
                            board.children[spotId].classList.remove('white-pawn', 'hoverable', 'white-piece');
                            board.children[spotId].innerHTML = '';
                            e.target.innerHTML = '&#9817';
                            e.target.className += ' white-pawn hoverable white-piece';
                            playGame.updatePieces(currentTurn);
                        } else {
                            return;
                        }
                    });
                } else {
                    return;
                }
            }


        }
    }

    whiteKnight(selected) {
        // Light up available sections
        const spotId = selected.id;
        const availableIds = [spotId - 17, spotId - 15];
        for (let i = 0; i < 64; i++) {
            const elementId = document.getElementById(i).id;
            const availableIdOne = availableIds[0];
            const availableIdTwo = availableIds[1];
            if(elementId == availableIdOne || elementId == availableIdTwo) {
                console.log('Selected Spot:' , spotId);
                console.log('Spot to be highlighted' , availableIdOne , availableIdTwo);
                board.children[availableIdOne].classList.add('available');
                board.children[availableIdTwo].classList.add('available');
            }
        }
    }
}