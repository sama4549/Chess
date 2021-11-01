import { updateBoard, currentTurn, playGame } from "./main.js";

export class Check {
    // Light up available sections & move pieces upon clicks
    whitePawn(selected) {
        const spotId = selected.id;
        const availableIds = [spotId - 8 , spotId - 16, spotId - 7, spotId - 9];
        for (let i = 0; i < 64; i++) {
            const elementId = document.getElementById(i).id;
            const availableIdOne = availableIds[0];
            const availableIdTwo = availableIds[1];
            const attackableIdOne = availableIds[2];
            const attackableIdTwo = availableIds[3];

            // Move Pieces
            if(elementId == availableIdOne) {
                if (board.children[availableIdOne].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
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
            }
            // If pawn is on the starting position
            if(elementId == availableIdTwo && selected.classList.contains('start')) {
                if (board.children[availableIdTwo].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdTwo].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdTwo].addEventListener('click', function listenForClick(e) {
                        if(board.children[spotId].classList.contains('selected')) {
                            board.children[spotId].classList.remove('white-pawn', 'hoverable', 'white-piece', 'start');
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

            if (board.children[attackableIdOne].classList.contains('black-piece')) {
                board.children[attackableIdOne].classList.add('attackable');
                board.children[attackableIdOne].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-pawn', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        if (e.target.classList.contains('black')) {
                            e.target.className = ' white-pawn hoverable white-piece black';
                        } else {
                            e.target.className = ' white-pawn hoverable white-piece';
                        }
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                })
            }
            
            if (board.children[attackableIdTwo].classList.contains('black-piece')) {
                board.children[attackableIdTwo].classList.add('attackable');
                board.children[attackableIdTwo].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-pawn', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        if (e.target.classList.contains('black')) {
                            e.target.className = ' white-pawn hoverable white-piece black';
                        } else {
                            e.target.className = ' white-pawn hoverable white-piece';
                        }
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                })
            } 
        }
    }


    blackPawn(selected) {
        const spotId = selected.id;
        const availableIds = [Number(spotId) + 8 , Number(spotId) + 16, Number(spotId) + 7, Number(spotId) + 9];
        for (let i = 0; i < 64; i++) {
            const elementId = document.getElementById(i).id;
            const availableIdOne = availableIds[0];
            const availableIdTwo = availableIds[1];
            const attackableIdOne = availableIds[2];
            const attackableIdTwo = availableIds[3];

            // Move Pieces
            if(elementId == availableIdOne) {
                if (board.children[availableIdOne].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdOne].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdOne].addEventListener('click', function listenForClick(e) {
                        if(board.children[spotId].classList.contains('selected')) {
                            board.children[spotId].classList.remove('black-pawn', 'hoverable', 'black-piece');
                            board.children[spotId].innerHTML = '';
                            e.target.innerHTML = '&#9823';
                            e.target.className += ' black-pawn hoverable black-piece';
                            playGame.updatePieces(currentTurn, listenForClick);
                        }
                    });
                }
            }
            // If pawn is on the starting position
            if(elementId == availableIdTwo && selected.classList.contains('start')) {
                if (board.children[availableIdTwo].classList.contains('hoverable')) {
                    console.log('blocked');
                } else {
                    board.children[availableIdTwo].classList.add('available');
                    // Event listener to allow for moving pieces
                    board.children[availableIdTwo].addEventListener('click', function listenForClick(e) {
                        if(board.children[spotId].classList.contains('selected')) {
                            board.children[spotId].classList.remove('black-pawn', 'hoverable', 'black-piece', 'start');
                            board.children[spotId].innerHTML = '';
                            e.target.innerHTML = '&#9823';
                            e.target.className += ' black-pawn hoverable black-piece';
                            playGame.updatePieces(currentTurn, listenForClick);
                        } else {
                            return;
                        }
                    });
                }
            }

            if (board.children[attackableIdOne].classList.contains('white-piece')) {
                board.children[attackableIdOne].classList.add('attackable');
                board.children[attackableIdOne].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('black-pawn', 'hoverable', 'black-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        if (e.target.classList.contains('black')) {
                            e.target.className = ' black-pawn hoverable black-piece black';
                        } else {
                            e.target.className = ' black-pawn hoverable black-piece';
                        }
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                })
            }
            
            if (board.children[attackableIdTwo].classList.contains('white-piece')) {
                board.children[attackableIdTwo].classList.add('attackable');
                board.children[attackableIdTwo].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('black-pawn', 'hoverable', 'black-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        if (e.target.classList.contains('black')) {
                            e.target.className = ' black-pawn hoverable black-piece black';
                        } else {
                            e.target.className = ' black-pawn hoverable black-piece';
                        }
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                })
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
            if (upLeft == 0 || upLeft == 1 || upLeft == 2 || upLeft == 3 || upLeft == 4 || upLeft == 5 || upLeft == 6 || upLeft == 8 || upLeft == 16 || upLeft == 24 || upLeft == 32 || upLeft == 40 || upLeft == 48 || upLeft == 56) {
                availableIds.push(upLeft);
                break;
            } else if (boardArray[upLeft] === undefined) {
                break;
            } else if (boardArray[upLeft].classList.contains('white-piece')) {
                break;
            } else if (boardArray[upLeft].classList.contains('black-piece')) {
                availableIds.push(upLeft);
                break;
            } else {
                availableIds.push(upLeft);
            }
        }

        for (let i = 1; i < 10; i++) {
            let upRight = spotId - (7 * i);
            if (upRight == 1 || upRight == 2 || upRight == 3 || upRight == 4 || upRight == 5 || upRight == 6 || upRight == 7 || upRight == 15 || upRight == 23 || upRight == 31 || upRight == 39 || upRight == 47 || upRight == 55 || upRight == 63) {
                availableIds.push(upRight);
                break;
            } else if (boardArray[upRight] === undefined) {
                break;
            } else if (boardArray[upRight].classList.contains('white-piece')) {
                break;
            } else if (boardArray[upRight].classList.contains('black-piece')) {
                availableIds.push(upRight);
                break;
            } else {
                availableIds.push(upRight);
            }
        }

        for (let i = 1; i < 10; i++) {
            let downLeft = Number(spotId) + Number((7 * i));
            if (downLeft == 0 || downLeft == 8 || downLeft == 16 || downLeft == 24 || downLeft == 32 || downLeft == 40 || downLeft == 48 || downLeft == 56 || downLeft == 57 || downLeft == 58 || downLeft == 59 || downLeft == 60 || downLeft == 61 || downLeft == 62 || downLeft == 63) {
                availableIds.push(downLeft);
                break;
            } else if (boardArray[downLeft] === undefined) {
                break;
            } else if (boardArray[downLeft].classList.contains('white-piece')) {
                break;
            } else if (boardArray[downLeft].classList.contains('black-piece')) {
                availableIds.push(downLeft);
                break;
            } else {
                availableIds.push(downLeft);
            }
        }

        for (let i = 1; i < 10; i++) {
            let downRight = Number(spotId) + Number((9 * i));
            if (downRight == 7 || downRight == 15 || downRight == 23 || downRight == 31 || downRight == 39 || downRight == 47 || downRight == 55 || downRight == 57 || downRight == 58 || downRight == 59 || downRight == 60 || downRight == 61 || downRight == 62 || downRight == 63 ) {
                availableIds.push(downRight);
                break;
            } else if (boardArray[downRight] === undefined) {
                break;
            } else if (boardArray[downRight].classList.contains('white-piece')) {
                break;
            } else if (boardArray[downRight].classList.contains('black-piece')) {
                availableIds.push(downRight);
                break;
            } else {
                availableIds.push(downRight);
            }
        }


        availableIds.forEach(id => {

            boardArray.forEach(spot=> {
                let spotName = spot.id;
                if(board.children[id].classList.contains('black-piece')) {
                    board.children[id].classList.add('attackable');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('white-bishop') && spot.classList.contains('selected')) {
                            spot.classList.remove('white-bishop', 'hoverable', 'white-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9815';
                            if (e.target.classList.contains('black')) {
                                e.target.className = ' white-bishop hoverable white-piece black';
                            } else {
                                e.target.className = ' white-bishop hoverable white-piece';
                            }
                            playGame.updatePieces(currentTurn, listenForClick);
                        }
                    })
                } else if(spotName = id) {
                    board.children[id].classList.add('available');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('white-bishop') && spot.classList.contains('selected')) {
                            spot.classList.remove('white-bishop', 'hoverable', 'white-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9815';
                            e.target.className += ' white-bishop hoverable white-piece';
                            playGame.updatePieces(currentTurn, listenForClick);
                        } else {
                            return;
                        }
                    })
                }
            })
        })
    }

    blackBishop(selected) {
        // Light up available sections
        let boardArray = Array.prototype.slice.call(board.children);
        const spotId = selected.id;
        let availableIds = [];
        for (let i = 1; i < 10; i++) {
            let upLeft = spotId - (9 * i);
            if (upLeft == 0 || upLeft == 1 || upLeft == 2 || upLeft == 3 || upLeft == 4 || upLeft == 5 || upLeft == 6 || upLeft == 8 || upLeft == 16 || upLeft == 24 || upLeft == 32 || upLeft == 40 || upLeft == 48 || upLeft == 56) {
                availableIds.push(upLeft);
                break;
            } else if (boardArray[upLeft] === undefined) {
                break;
            } else if (boardArray[upLeft].classList.contains('black-piece')) {
                break;
            } else if (boardArray[upLeft].classList.contains('white-piece')) {
                availableIds.push(upLeft);
                break;
            } else {
                availableIds.push(upLeft);
            }
        }

        for (let i = 1; i < 10; i++) {
            let upRight = spotId - (7 * i);
            if (upRight == 1 || upRight == 2 || upRight == 3 || upRight == 4 || upRight == 5 || upRight == 6 || upRight == 7 || upRight == 15 || upRight == 23 || upRight == 31 || upRight == 39 || upRight == 47 || upRight == 55 || upRight == 63) {
                availableIds.push(upRight);
                break;
            } else if (boardArray[upRight] === undefined) {
                break;
            } else if (boardArray[upRight].classList.contains('black-piece')) {
                break;
            } else if (boardArray[upRight].classList.contains('white-piece')) {
                availableIds.push(upRight);
                break;
            } else {
                availableIds.push(upRight);
            }
        }

        for (let i = 1; i < 10; i++) {
            let downLeft = Number(spotId) + Number((7 * i));
            if (downLeft == 0 || downLeft == 8 || downLeft == 16 || downLeft == 24 || downLeft == 32 || downLeft == 40 || downLeft == 48 || downLeft == 56 || downLeft == 57 || downLeft == 58 || downLeft == 59 || downLeft == 60 || downLeft == 61 || downLeft == 62 || downLeft == 63) {
                availableIds.push(downLeft);
                break;
            } else if (boardArray[downLeft] === undefined) {
                break;
            } else if (boardArray[downLeft].classList.contains('black-piece')) {
                break;
            } else if (boardArray[downLeft].classList.contains('white-piece')) {
                availableIds.push(downLeft);
                break;
            } else {
                availableIds.push(downLeft);
            }
        }

        for (let i = 1; i < 10; i++) {
            let downRight = Number(spotId) + Number((9 * i));
            if (downRight == 7 || downRight == 15 || downRight == 23 || downRight == 31 || downRight == 39 || downRight == 47 || downRight == 55 || downRight == 57 || downRight == 58 || downRight == 59 || downRight == 60 || downRight == 61 || downRight == 62 || downRight == 63 ) {
                availableIds.push(downRight);
                break;
            } else if (boardArray[downRight] === undefined) {
                break;
            } else if (boardArray[downRight].classList.contains('black-piece')) {
                break;
            } else if (boardArray[downRight].classList.contains('white-piece')) {
                availableIds.push(downRight);
                break;
            } else {
                availableIds.push(downRight);
            }
        }


        availableIds.forEach(id => {

            boardArray.forEach(spot=> {
                let spotName = spot.id;
                if(board.children[id].classList.contains('white-piece')) {
                    board.children[id].classList.add('attackable');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('black-bishop') && spot.classList.contains('selected')) {
                            spot.classList.remove('black-bishop', 'hoverable', 'black-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9821';
                            if (e.target.classList.contains('black')) {
                                e.target.className = ' black-bishop hoverable black-piece black';
                            } else {
                                e.target.className = ' black-bishop hoverable black-piece';
                            }
                            playGame.updatePieces(currentTurn, listenForClick);
                        }
                    })
                } else if(spotName = id) {
                    board.children[id].classList.add('available');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('black-bishop') && spot.classList.contains('selected')) {
                            spot.classList.remove('black-bishop', 'hoverable', 'black-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9821';
                            e.target.className += ' black-bishop hoverable black-piece';
                            playGame.updatePieces(currentTurn, listenForClick);
                        } else {
                            return;
                        }
                    })
                }
            })
        })
    }

    whiteRook(selected) {
        // Light up available sections
        let boardArray = Array.prototype.slice.call(board.children);
        const spotId = selected.id;
        let availableIds = [];
        for (let i = 1; i < 10; i++) {
            let up = spotId - (8 * i);
            if (up === 0 || up === 1 || up === 2 || up === 3 || up === 4 || up === 5 || up === 6 || up === 7) {
                availableIds.push(up);
                break;
            } else if (boardArray[up] === undefined) {
                break;
            } else if (boardArray[up].classList.contains('white-piece')) {
                break;
            } else if (boardArray[up].classList.contains('black-piece')) {
                availableIds.push(up);
                break;
            } else {
                availableIds.push(up);
            }
        }

        for (let i = 1; i < 10; i++) {
            let right = Number(spotId) + Number(i);
            if (right == 7 || right == 15 || right == 23 || right == 31 || right == 39 || right == 47 || right == 55 || right == 63) {
                availableIds.push(right);
                break;
            } else if (boardArray[right] === undefined) {
                break;
            } else if (boardArray[right].classList.contains('white-piece')) {
                break;
            } else if (boardArray[right].classList.contains('black-piece')) {
                availableIds.push(right);
                break;
            } else {
                availableIds.push(right);
            }
        }

        for (let i = 1; i < 10; i++) {
            let down = Number(spotId) + (8 * i);
            if (down === 56 || down === 57 || down === 58 || down === 59 || down === 60 || down === 61 || down === 62 || down === 63) {
                availableIds.push(down);
                break;
            } else if (boardArray[down] === undefined) {
                break;
            } else if (boardArray[down].classList.contains('white-piece')) {
                break;
            } else if (boardArray[down].classList.contains('black-piece')) {
                availableIds.push(down);
                break;
            } else {
                availableIds.push(down);
            }
        }

        for (let i = 1; i < 10; i++) {
            let left = spotId - i;
            if (left == 0 || left == 8 || left == 16 || left == 24 || left == 32 || left == 40 || left == 48 || left == 56) {
                availableIds.push(left);
                break;
            } else if (boardArray[left] === undefined) {
                break;
            } else if (boardArray[left].classList.contains('white-piece')) {
                break;
            } else if (boardArray[left].classList.contains('black-piece')) {
                availableIds.push(left);
                break;
            } else {
                availableIds.push(left);
            }
        }


        availableIds.forEach(id => {

            boardArray.forEach(spot=> {
                let spotName = spot.id;

                if(board.children[id].classList.contains('black-piece')) {
                    board.children[id].classList.add('attackable');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('white-rook') && spot.classList.contains('selected')) {
                            spot.classList.remove('white-rook', 'hoverable', 'white-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9814';
                            if (e.target.classList.contains('black')) {
                                e.target.className = ' white-rook hoverable white-piece black';
                            } else {
                                e.target.className = ' white-rook hoverable white-piece';
                            }
                            playGame.updatePieces(currentTurn, listenForClick);
                        }
                    })
                } else if(spotName = id) {
                    board.children[id].classList.add('available');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('white-rook') && spot.classList.contains('selected')) {
                            spot.classList.remove('white-rook', 'hoverable', 'white-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9814';
                            e.target.className += ' white-rook hoverable white-piece';
                            playGame.updatePieces(currentTurn, listenForClick);
                        } else {
                            return;
                        }
                    })
                }
            })
        })
    }

    blackRook(selected) {
        // Light up available sections
        let boardArray = Array.prototype.slice.call(board.children);
        const spotId = selected.id;
        let availableIds = [];
        for (let i = 1; i < 10; i++) {
            let up = spotId - (8 * i);
            if (up === 0 || up === 1 || up === 2 || up === 3 || up === 4 || up === 5 || up === 6 || up === 7) {
                availableIds.push(up);
                break;
            } else if (boardArray[up] === undefined) {
                break;
            } else if (boardArray[up].classList.contains('black-piece')) {
                break;
            } else if (boardArray[up].classList.contains('white-piece')) {
                availableIds.push(up);
                break;
            } else {
                availableIds.push(up);
            }
        }

        for (let i = 1; i < 10; i++) {
            let right = Number(spotId) + Number(i);
            if (right == 7 || right == 15 || right == 23 || right == 31 || right == 39 || right == 47 || right == 55 || right == 63) {
                availableIds.push(right);
                break;
            } else if (boardArray[right] === undefined) {
                break;
            } else if (boardArray[right].classList.contains('black-piece')) {
                break;
            } else if (boardArray[right].classList.contains('white-piece')) {
                availableIds.push(right);
                break;
            } else {
                availableIds.push(right);
            }
        }

        for (let i = 1; i < 10; i++) {
            let down = Number(spotId) + (8 * i);
            if (down === 56 || down === 57 || down === 58 || down === 59 || down === 60 || down === 61 || down === 62 || down === 63) {
                availableIds.push(down);
                break;
            } else if (boardArray[down] === undefined) {
                break;
            } else if (boardArray[down].classList.contains('black-piece')) {
                break;
            } else if (boardArray[down].classList.contains('white-piece')) {
                availableIds.push(down);
                break;
            } else {
                availableIds.push(down);
            }
        }

        for (let i = 1; i < 10; i++) {
            let left = spotId - i;
            if (left == 0 || left == 8 || left == 16 || left == 24 || left == 32 || left == 40 || left == 48 || left == 56) {
                availableIds.push(left);
                break;
            } else if (boardArray[left] === undefined) {
                break;
            } else if (boardArray[left].classList.contains('black-piece')) {
                break;
            } else if (boardArray[left].classList.contains('white-piece')) {
                availableIds.push(left);
                break;
            } else {
                availableIds.push(left);
            }
        }


        availableIds.forEach(id => {

            boardArray.forEach(spot=> {
                let spotName = spot.id;

                if(board.children[id].classList.contains('white-piece')) {
                    board.children[id].classList.add('attackable');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('black-rook') && spot.classList.contains('selected')) {
                            spot.classList.remove('black-rook', 'hoverable', 'black-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9820';
                            if (e.target.classList.contains('black')) {
                                e.target.className = ' black-rook hoverable black-piece black';
                            } else {
                                e.target.className = ' black-rook hoverable black-piece';
                            }
                            playGame.updatePieces(currentTurn, listenForClick);
                        }
                    })
                } else if(spotName = id) {
                    board.children[id].classList.add('available');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('black-rook') && spot.classList.contains('selected')) {
                            spot.classList.remove('black-rook', 'hoverable', 'black-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9820';
                            e.target.className += ' black-rook hoverable black-piece';
                            playGame.updatePieces(currentTurn, listenForClick);
                        } else {
                            return;
                        }
                    })
                }
            })
        })
    }

    whiteQueen(selected) {
        // Light up available sections
        let boardArray = Array.prototype.slice.call(board.children);
        const spotId = selected.id;
        let availableIds = [];
        for (let i = 1; i < 10; i++) {
            let up = spotId - (8 * i);
            if (up === 0 || up === 1 || up === 2 || up === 3 || up === 4 || up === 5 || up === 6 || up === 7) {
                availableIds.push(up);
                break;
            } else if (boardArray[up] === undefined) {
                break;
            } else if (boardArray[up].classList.contains('white-piece')) {
                break;
            } else if (boardArray[up].classList.contains('black-piece')) {
                availableIds.push(up);
                break;
            } else {
                availableIds.push(up);
            }
        }

        for (let i = 1; i < 10; i++) {
            let right = Number(spotId) + Number(i);
            if (right == 7 || right == 15 || right == 23 || right == 31 || right == 39 || right == 47 || right == 55 || right == 63) {
                availableIds.push(right);
                break;
            } else if (boardArray[right] === undefined) {
                break;
            } else if (boardArray[right].classList.contains('white-piece')) {
                break;
            } else if (boardArray[right].classList.contains('black-piece')) {
                availableIds.push(right);
                break;
            } else {
                availableIds.push(right);
            }
        }

        for (let i = 1; i < 10; i++) {
            let down = spotId + (8 * i);
            if (down === 56 || down === 57 || down === 58 || down === 59 || down === 60 || down === 61 || down === 62 || down === 63) {
                availableIds.push(down);
                break;
            } else if (boardArray[down] === undefined) {
                break;
            } else if (boardArray[down].classList.contains('white-piece')) {
                break;
            } else if (boardArray[down].classList.contains('black-piece')) {
                availableIds.push(down);
                break;
            }  else {
                availableIds.push(down);
            }
        }

        for (let i = 1; i < 10; i++) {
            let left = spotId - i;
            if (left == 0 || left == 8 || left == 16 || left == 24 || left == 32 || left == 40 || left == 48 || left == 56 ) {
                availableIds.push(left);
                break;
            } else if (boardArray[left] === undefined) {
                break;
            } else if (boardArray[left].classList.contains('white-piece')) {
                break;
            } else if (boardArray[left].classList.contains('black-piece')) {
                availableIds.push(left);
                break;
            } else {
                availableIds.push(left);
            }
        }

        for (let i = 1; i < 10; i++) {
            let upLeft = spotId - (9 * i);
            if (upLeft == 0 || upLeft == 1 || upLeft == 2 || upLeft == 3 || upLeft == 4 || upLeft == 5 || upLeft == 6 || upLeft == 8 || upLeft == 16 || upLeft == 24 || upLeft == 32 || upLeft == 40 || upLeft == 48 || upLeft == 56) {
                availableIds.push(upLeft);
                break;
            } else if (boardArray[upLeft] === undefined) {
                break;
            } else if (boardArray[upLeft].classList.contains('white-piece')) {
                break;
            } else if (boardArray[upLeft].classList.contains('black-piece')) {
                availableIds.push(upLeft);
                break;
            } else {
                availableIds.push(upLeft);
            }
        }

        for (let i = 1; i < 10; i++) {
            let upRight = spotId - (7 * i);
            if (upRight == 1 || upRight == 2 || upRight == 3 || upRight == 4 || upRight == 5 || upRight == 6 || upRight == 7 || upRight == 15 || upRight == 23 || upRight == 31 || upRight == 39 || upRight == 47 || upRight == 55 || upRight == 63) {
                availableIds.push(upRight);
                break;
            } else if (boardArray[upRight] === undefined) {
                break;
            } else if (boardArray[upRight].classList.contains('white-piece')) {
                break;
            } else if (boardArray[upRight].classList.contains('black-piece')) {
                availableIds.push(upRight);
                break;
            } else {
                availableIds.push(upRight);
            }
        }

        for (let i = 1; i < 10; i++) {
            let downLeft = Number(spotId) + Number((7 * i));
            if (downLeft == 0 || downLeft == 8 || downLeft == 16 || downLeft == 24 || downLeft == 32 || downLeft == 40 || downLeft == 48 || downLeft == 56 || downLeft == 57 || downLeft == 58 || downLeft == 59 || downLeft == 60 || downLeft == 61 || downLeft == 62 || downLeft == 63) {
                availableIds.push(downLeft);
                break;
            } else if (boardArray[downLeft] === undefined) {
                break;
            } else if (boardArray[downLeft].classList.contains('white-piece')) {
                break;
            } else if (boardArray[downLeft].classList.contains('black-piece')) {
                availableIds.push(downLeft);
                break;
            } else {
                availableIds.push(downLeft);
            }
        }

        for (let i = 1; i < 10; i++) {
            let downRight = Number(spotId) + Number((9 * i));
            if (downRight == 7 || downRight == 15 || downRight == 23 || downRight == 31 || downRight == 39 || downRight == 47 || downRight == 55 || downRight == 57 || downRight == 58 || downRight == 59 || downRight == 60 || downRight == 61 || downRight == 62 || downRight == 63 ) {
                availableIds.push(downRight);
                break;
            } else if (boardArray[downRight] === undefined) {
                break;
            } else if (boardArray[downRight].classList.contains('white-piece')) {
                break;
            } else if (boardArray[downRight].classList.contains('black-piece')) {
                availableIds.push(downRight);
                break;
            } else {
                availableIds.push(downRight);
            }
        }


        availableIds.forEach(id => {

            boardArray.forEach(spot=> {
                let spotName = spot.id;

                if(board.children[id].classList.contains('black-piece')) {
                    board.children[id].classList.add('attackable');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('white-queen') && spot.classList.contains('selected')) {
                            spot.classList.remove('white-queen', 'hoverable', 'white-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9813';
                            if (e.target.classList.contains('black')) {
                                e.target.className = ' white-queen hoverable white-piece black';
                            } else {
                                e.target.className = ' white-queen hoverable white-piece';
                            }
                            playGame.updatePieces(currentTurn, listenForClick);
                        }
                    })
                } else if(spotName = id) {
                    board.children[id].classList.add('available');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('white-queen') && spot.classList.contains('selected')) {
                            spot.classList.remove('white-queen', 'hoverable', 'white-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9813';
                            e.target.className += ' white-queen hoverable white-piece';
                            playGame.updatePieces(currentTurn, listenForClick);
                        } else {
                            return;
                        }
                    })
                }
            })
        })
    }

    blackQueen(selected) {
        // Light up available sections
        let boardArray = Array.prototype.slice.call(board.children);
        const spotId = selected.id;
        let availableIds = [];
        for (let i = 1; i < 10; i++) {
            let up = spotId - (8 * i);
            if (up === 0 || up === 1 || up === 2 || up === 3 || up === 4 || up === 5 || up === 6 || up === 7) {
                availableIds.push(up);
                break;
            } else if (boardArray[up] === undefined) {
                break;
            } else if (boardArray[up].classList.contains('black-piece')) {
                break;
            } else if (boardArray[up].classList.contains('white-piece')) {
                availableIds.push(up);
                break;
            } else {
                availableIds.push(up);
            }
        }

        for (let i = 1; i < 10; i++) {
            let right = Number(spotId) + Number(i);
            if (right == 7 || right == 15 || right == 23 || right == 31 || right == 39 || right == 47 || right == 55 || right == 63) {
                availableIds.push(right);
                break;
            } else if (boardArray[right] === undefined) {
                break;
            } else if (boardArray[right].classList.contains('black-piece')) {
                break;
            } else if (boardArray[right].classList.contains('white-piece')) {
                availableIds.push(right);
                break;
            } else {
                availableIds.push(right);
            }
        }

        for (let i = 1; i < 10; i++) {
            let down = Number(spotId) + (8 * i);
            if (down === 56 || down === 57 || down === 58 || down === 59 || down === 60 || down === 61 || down === 62 || down === 63) {
                availableIds.push(down);
                break;
            } else if (boardArray[down] === undefined) {
                break;
            } else if (boardArray[down].classList.contains('black-piece')) {
                break;
            } else if (boardArray[down].classList.contains('white-piece')) {
                availableIds.push(down);
                break;
            }  else {
                availableIds.push(down);
            }
        }

        for (let i = 1; i < 10; i++) {
            let left = spotId - i;
            if (left == 0 || left == 8 || left == 16 || left == 24 || left == 32 || left == 40 || left == 48 || left == 56 ) {
                availableIds.push(left);
                break;
            } else if (boardArray[left] === undefined) {
                break;
            } else if (boardArray[left].classList.contains('black-piece')) {
                break;
            } else if (boardArray[left].classList.contains('white-piece')) {
                availableIds.push(left);
                break;
            } else {
                availableIds.push(left);
            }
        }

        for (let i = 1; i < 10; i++) {
            let upLeft = spotId - (9 * i);
            if (upLeft == 0 || upLeft == 1 || upLeft == 2 || upLeft == 3 || upLeft == 4 || upLeft == 5 || upLeft == 6 || upLeft == 8 || upLeft == 16 || upLeft == 24 || upLeft == 32 || upLeft == 40 || upLeft == 48 || upLeft == 56) {
                availableIds.push(upLeft);
                break;
            } else if (boardArray[upLeft] === undefined) {
                break;
            } else if (boardArray[upLeft].classList.contains('black-piece')) {
                break;
            } else if (boardArray[upLeft].classList.contains('white-piece')) {
                availableIds.push(upLeft);
                break;
            } else {
                availableIds.push(upLeft);
            }
        }

        for (let i = 1; i < 10; i++) {
            let upRight = spotId - (7 * i);
            if (upRight == 1 || upRight == 2 || upRight == 3 || upRight == 4 || upRight == 5 || upRight == 6 || upRight == 7 || upRight == 15 || upRight == 23 || upRight == 31 || upRight == 39 || upRight == 47 || upRight == 55 || upRight == 63) {
                availableIds.push(upRight);
                break;
            } else if (boardArray[upRight] === undefined) {
                break;
            } else if (boardArray[upRight].classList.contains('black-piece')) {
                break;
            } else if (boardArray[upRight].classList.contains('white-piece')) {
                availableIds.push(upRight);
                break;
            } else {
                availableIds.push(upRight);
            }
        }

        for (let i = 1; i < 10; i++) {
            let downLeft = Number(spotId) + Number((7 * i));
            if (downLeft == 0 || downLeft == 8 || downLeft == 16 || downLeft == 24 || downLeft == 32 || downLeft == 40 || downLeft == 48 || downLeft == 56 || downLeft == 57 || downLeft == 58 || downLeft == 59 || downLeft == 60 || downLeft == 61 || downLeft == 62 || downLeft == 63) {
                availableIds.push(downLeft);
                break;
            } else if (boardArray[downLeft] === undefined) {
                break;
            } else if (boardArray[downLeft].classList.contains('black-piece')) {
                break;
            } else if (boardArray[downLeft].classList.contains('white-piece')) {
                availableIds.push(downLeft);
                break;
            } else {
                availableIds.push(downLeft);
            }
        }

        for (let i = 1; i < 10; i++) {
            let downRight = Number(spotId) + Number((9 * i));
            if (downRight == 7 || downRight == 15 || downRight == 23 || downRight == 31 || downRight == 39 || downRight == 47 || downRight == 55 || downRight == 57 || downRight == 58 || downRight == 59 || downRight == 60 || downRight == 61 || downRight == 62 || downRight == 63 ) {
                availableIds.push(downRight);
                break;
            } else if (boardArray[downRight] === undefined) {
                break;
            } else if (boardArray[downRight].classList.contains('black-piece')) {
                break;
            } else if (boardArray[downRight].classList.contains('white-piece')) {
                availableIds.push(downRight);
                break;
            } else {
                availableIds.push(downRight);
            }
        }


        availableIds.forEach(id => {

            boardArray.forEach(spot=> {
                let spotName = spot.id;

                if(board.children[id].classList.contains('white-piece')) {
                    board.children[id].classList.add('attackable');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('black-queen') && spot.classList.contains('selected')) {
                            spot.classList.remove('black-queen', 'hoverable', 'black-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9819';
                            if (e.target.classList.contains('black')) {
                                e.target.className = ' black-queen hoverable black-piece black';
                            } else {
                                e.target.className = ' black-queen hoverable black-piece';
                            }
                            playGame.updatePieces(currentTurn, listenForClick);
                        }
                    })
                } else if(spotName = id) {
                    board.children[id].classList.add('available');
                    board.children[id].addEventListener('click', function listenForClick(e) {
                        if(spot.classList.contains('black-queen') && spot.classList.contains('selected')) {
                            spot.classList.remove('black-queen', 'hoverable', 'black-piece');
                            spot.innerHTML = '';
                            e.target.innerHTML = '&#9819';
                            e.target.className += ' black-queen hoverable black-piece';
                            playGame.updatePieces(currentTurn, listenForClick);
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
        const availableIds = [spotId - 17, spotId - 15, spotId - 6, spotId - 10, Number(spotId) + 17, Number(spotId) + 15, Number(spotId) + 10, Number(spotId) + 6];

        availableIds.forEach(id => {
            if(board.children[id] === undefined || board.children[id].classList.contains('white-piece')) {
                console.log('blocked');
            } else if (board.children[id].classList.contains('black-piece')) {
                board.children[id].classList.add('attackable');
                board.children[id].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-knight', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        if (e.target.classList.contains('black')) {
                            e.target.className = ' white-knight hoverable white-piece black';
                        } else {
                            e.target.className = ' white-knight hoverable white-piece';
                        }
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                })
                // Moving onto a blank space
            } else {
                board.children[id].classList.add('available');
                // Event Listener to allow for moving pieces
                board.children[id].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-knight', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9817';
                        e.target.className += ' white-knight hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                })
            }
        })
    }

    whiteKing(selected) {
        // Light up available sections
        const spotId = selected.id;
        const availableIds = [spotId - 1, spotId - 9, spotId - 8, spotId - 7, Number(spotId) + 1, Number(spotId) + 9, Number(spotId) + 8, Number(spotId) + 7];

        availableIds.forEach(id => {
            if(board.children[id] === undefined || board.children[id].classList.contains('white-piece')) {
                console.log('blocked');
                // Attacking another player's space
            } else if (board.children[id].classList.contains('black-piece')) {
                board.children[id].classList.add('attackable');
                board.children[id].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-king', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9812';
                        if (e.target.classList.contains('black')) {
                            e.target.className = ' white-king hoverable white-piece black';
                        } else {
                            e.target.className = ' white-king hoverable white-piece';
                        }
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                })
                // Moving onto a blank space
            } else {
                board.children[id].classList.add('available');
                board.children[id].addEventListener('click', function listenForClick(e) {
                    if(board.children[spotId].classList.contains('selected')) {
                        board.children[spotId].classList.remove('white-king', 'hoverable', 'white-piece');
                        board.children[spotId].innerHTML = '';
                        e.target.innerHTML = '&#9812';
                        e.target.className += ' white-king hoverable white-piece';
                        playGame.updatePieces(currentTurn, listenForClick);
                    }
                })
            }
        });
    }
}