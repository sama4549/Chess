import { updateBoard, currentTurn, playGame } from "./main.js";

export class Check {
    // Light up available sections & move pieces upon clicks
    whitePawn(selected) {
        const spotId = selected.id;
        const availableIds = [spotId - 8 , spotId - 16];
        for (let i = 0; i < 64; i++) {
            const elementId = document.getElementById(i).id;
            const availableIdOne = availableIds[0];
            const availableIdTwo = availableIds[1];

            // Move Pieces
            if(elementId == availableIdOne) {
                board.children[availableIdOne].classList.add('available');
                // Event listener to allow for moving pieces
                board.children[availableIdOne].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-pawn', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-pawn hoverable white-piece';
                        playGame.updatePieces(currentTurn);
                    }
                });
            }
            if(elementId == availableIdTwo && selected.classList.contains('start')) {
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
            }
        }
    }

    whiteBishop(selected) {
        // Light up available sections
        const spotId = selected.id;
        let availableIds = [];
        for (let i = 0; i < 10; i++) {
            availableIds.push(spotId - (9 * i), spotId - (7 * i));
        }
        availableIds.forEach(id => {
            let boardArray = Array.prototype.slice.call(board.children);
            boardArray.forEach(spot=> {
                let spotName = spot.id;
                if(spotName = id) {
                    console.log(board.children[id]);
                    board.children[id].classList.add('available');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('selected')) {
                            console.log('testing...');
                            spot.classList.remove('white-bishop', 'hoverable', 'white-peice');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9815';
                            e.target.className += ' white-bishop hoverable white-piece';
                            playGame.updatePieces(currentTurn);
                        } else {
                            return;
                        }
                    })
                }
            })
        })
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