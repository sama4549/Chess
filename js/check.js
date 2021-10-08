export class Check {
    // Light up available sections
    whitePawn(selected) {
        const spotId = selected.id;
        const availableIds = [spotId - 8 , spotId - 16];
        for (let i = 0; i < 64; i++) {
            const elementId = document.getElementById(i).id;
            const availableIdOne = availableIds[0];
            const availableIdTwo = availableIds[1];
            if(elementId == availableIdOne || elementId == availableIdTwo) {
                console.log('Selected Spot:' , spotId);
                console.log('Spot to be highlighted:' , availableIdOne , availableIdTwo);
                board.children[availableIdOne].classList.add('available');
                board.children[availableIdTwo].classList.add('available');
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