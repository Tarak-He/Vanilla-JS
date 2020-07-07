document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'blue',
            img: 'images/blue.png'
        },
        {
            name: 'blue',
            img: 'images/blue.png'
        },
        {
            name: 'darkblue',
            img: 'images/darkblue.png'
        },
        {
            name: 'darkblue',
            img: 'images/darkblue.png'
        },
        {
            name: 'red',
            img: 'images/red.png'
        },
        {
            name: 'red',
            img: 'images/red.png'
        },
        {
            name: 'green',
            img: 'images/green.png'
        },
        {
            name: 'green',
            img: 'images/green.png'
        },
        {
            name: 'yellow',
            img: 'images/yellow.png'
        },
        {
            name: 'yellow',
            img: 'images/yellow.png'
        },
        {
            name: 'purple',
            img: 'images/purple.png'
        },
        {
            name: 'purple',
            img: 'images/purple.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('#grid');
    const resultDisplay = document.querySelector('#result')

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //create your board
    function createBoard() {
        for (let i=0 ; i<cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        console.log ('checking for matches...');
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1] ) {
            console.log ('match');
            cards[optionOneId].setAttribute('src', 'images/ok.png');
            cards[optionTwoId].setAttribute('src', 'images/ok.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats you found them all';
        }
   
        
    }

    //flip your card
    function flipcard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        console.log(cardsChosen)

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }



    createBoard();

})