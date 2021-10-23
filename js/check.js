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
            if (upRight == 7 || upRight == 15 || upRight == 23 || upRight == 31 || upRight == 39 || upRight == 47 || upRight == 55 || upRight == 63) {
                availableIds.push(upRight);
                break;
            } else if (boardArray[upRight].classList.contains('hoverable')) {
                break;
            } else {
                availableIds.push(upRight);
            }
        }

        for (let i = 1; i < 10; i++) {
            let downLeft = Number(spotId) + Number((7 * i));
            if (downLeft === 0 || downLeft === 8 || downLeft === 16 || downLeft === 24 || downLeft === 32 || downLeft === 40 || downLeft === 48 || downLeft === 56) {
                availableIds.push(downLeft);
                break;
            } else if (boardArray[downLeft] === undefined) {
                break;
            } else if (boardArray[downLeft].classList.contains('hoverable')) {
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
        const availableIds = [spotId - 17, spotId - 15, spotId - 6, spotId - 10];
        for (let i = 0; i < 64; i++) {
            const elementId = document.getElementById(i).id;
            const availableIdOne = availableIds[0];
            const availableIdTwo = availableIds[1];
            const availableIdThree = availableIds[2];
            const availableIdFour = availableIds[3];

            // Move pieces
            if(elementId == availableIdOne) {
                if(board.children[availableIdOne].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdOne].classList.add('available');
                }
                // Event listener to allow for moving pieces
                board.children[availableIdOne].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-knight', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-knight hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
            }

            if(elementId == availableIdTwo) {
                if(board.children[availableIdTwo].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdTwo].classList.add('available');
                }
                // Event listener to allow for moving pieces
                board.children[availableIdTwo].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-knight', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-knight hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
            }

            if(elementId == availableIdThree) {
                if(board.children[availableIdThree].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdThree].classList.add('available');
                }
                // Event listener to allow for moving pieces
                board.children[availableIdThree].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-knight', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-knight hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
            }

            if(elementId == availableIdFour) {
                if(board.children[availableIdFour].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdFour].classList.add('available');
                }
                // Event listener to allow for moving pieces
                board.children[availableIdFour].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-knight', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-knight hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
            }
        }
    }

    whiteKing(selected) {
        // Light up available sections
        const spotId = selected.id;
        const availableIds = [spotId - 1, spotId - 9, spotId - 8, spotId - 7, Number(spotId) + 1, Number(spotId) + 9, Number(spotId) + 8, Number(spotId) + 7];
        for (let i = 0; i < 64; i++) {
            const elementId = document.getElementById(i).id;
            const availableIdOne = availableIds[0];
            const availableIdTwo = availableIds[1];
            const availableIdThree = availableIds[2];
            const availableIdFour = availableIds[3];
            const availableIdFive = availableIds[4];
            const availableIdSix = availableIds[5];
            const availableIdSeven = availableIds[6];
            const availableIdEight = availableIds[7];

            // Move pieces
            if(elementId == availableIdOne) {
                if(board.children[availableIdOne].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdOne].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdOne].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-king', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-king hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
                }
            }

            if(elementId == availableIdTwo) {
                if(board.children[availableIdTwo].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdTwo].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdTwo].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-king', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-king hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
                }
            }

            if(elementId == availableIdThree) {
                if(board.children[availableIdThree].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdThree].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdThree].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-king', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-king hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
                }
            }

            if(elementId == availableIdFour) {
                if(board.children[availableIdFour].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdFour].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdFour].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-king', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-king hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
                }
            }

            if(elementId == availableIdFive) {
                if(board.children[availableIdFive].classList.contains('hoverable')) {
                    console.log(availableIdFive , 'blocked');
                } else {
                    board.children[availableIdFive].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdFive].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-king', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-king hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
                }
            }

            if(elementId == availableIdSix) {
                if(board.children[availableIdSix].classList.contains('hoverable')) {
                    console.log(availableIdSix , 'blocked');
                } else {
                    board.children[availableIdSix].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdSix].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-king', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-king hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
                }
            }

            if(elementId == availableIdSeven) {
                if(board.children[availableIdSeven].classList.contains('hoverable')) {
                    console.log(availableIdSeven , 'blocked');
                } else {
                    board.children[availableIdSeven].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdSeven].addEventListener('click', function listenForClick(e) {
                        if(board.children[spotId].classList.contains('selected')) {
                            board.children[spotId].classList.remove('white-king', 'hoverable', 'white-piece');
                            board.children[spotId].innerHTML = '';
                            e.target.innerHTML = '&#9817';
                            e.target.className += ' white-king hoverable white-piece';
                            playGame.updatePieces(currentTurn, listenForClick);
                        }
                    });
                }
            }

            if(elementId == availableIdEight) {
                if(board.children[availableIdEight].classList.contains('hoverable')) {
                    console.log(availableIdEight , 'blocked');
                } else {
                    board.children[availableIdEight].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdEight].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-king', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-king hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                });
            }
            }
        }
    }
}