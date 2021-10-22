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
                        playGame.updatePieces(currentTurn, listenForClick);
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
                        playGame.updatePieces(currentTurn, listenForClick);
                    } else {
                        return;
                    }
                });
            }
        }
    }

    whiteBishop(selected) {
        // Light up available sections
        let boardArray = Array.prototype.slice.call(board.children);
        const spotId = selected.id;
        let availableIds = [];
        for (let i = 1; i < 10; i++) {
            let upLeft = spotId - (9 * i);
            if (upLeft === 0 || upLeft === 8 || upLeft === 16 || upLeft === 24 || upLeft === 32 || upLeft === 40 || upLeft === 48 || upLeft === 56) {
                availableIds.push(upLeft);
                break;
            } else if (boardArray[upLeft].classList.contains('hoverable')) {
                break;
            } else {
                availableIds.push(upLeft);
            }
        }

        for (let i = 1; i < 10; i++) {
            let upRight = spotId - (7 * i);
            availableIds.push(upRight);
            console.log(boardArray[upRight]);
            if (upRight == 7 || upRight == 15 || upRight == 23 || upRight == 31 || upRight == 39 || upRight == 47 || upRight == 55 || upRight == 63 || boardArray[51].classList.contains('hoverable')) {
                break;
            } else {
                availableIds.push(downLeft);
            }
        }

        for (let i = 1; i < 10; i++) {
            let downRight = Number(spotId) + Number((9 * i));
            if (downRight == 7 || downRight == 15 || downRight == 23 || downRight == 31 || downRight == 39 || downRight == 47 || downRight == 55 || downRight == 63 ) {
                availableIds.push(downRight);
                break;
            } else if (boardArray[downRight] === undefined) {
                break;
            } else if (boardArray[downRight].classList.contains('hoverable')) {
                break;
            } else {
                availableIds.push(downRight);
            }
        }


        availableIds.forEach(id => {

            boardArray.forEach(spot=> {
                let spotName = spot.id;
                if(spotName = id) {
                    board.children[id].classList.add('available');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('white-bishop') && spot.classList.contains('selected')) {
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