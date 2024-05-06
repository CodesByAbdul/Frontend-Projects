//Selecting elements:
const container = document.querySelector('.container');
const cards = container.querySelectorAll('.card');
const reset = document.querySelector('button');

// concerting Nodes to an Array:
const cardsArray = Array.from(cards);

// Shuffling array;
shuffle(cardsArray);

//Reordering of the HTML cards
cardsArray.forEach(card =>{
	container.appendChild(card);
});

let card1, card2;
let matchedPairs = 0;
let countdownTime = 90;
let countdownInterval;

// Function to shuffle array:
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// Array to store matched cards
let matchedCards = [];

function cardFlip() {
	// Check if the clicked card is already matched
	if (matchedCards.includes(this)) {
		// Ignore the click if the card is already matched
		return;
	}

	if (!card1) {
		card1 = this;
		card1.lastElementChild.classList.remove('hidden');
		card1.firstElementChild.classList.add('hidden');
	} else if (!card2) {
		card2 = this;
		card2.lastElementChild.classList.remove('hidden');
		card2.firstElementChild.classList.add('hidden');
        
		if (card1.lastElementChild.src === card2.lastElementChild.src) {
			// Cards match, play match sound
			const matchSound = new Audio('sounds/match.wav');
			matchSound.play();
			// Increment matched pairs
			matchedPairs++;
            
			if (matchedPairs === 10) {
				disableCards();
				clearInterval(countdownInterval);
				setTimeout(() => {
					alert('You are a Gamer 🏆');
					}, 1000);
			}
			// Add matched cards to the array
			matchedCards.push(card1, card2);
			card1 = null;
			card2 = null;
		} else {
			// Cards don't match, hide them again
			const unmatchSound = new Audio('sounds/unmatch.wav');
			unmatchSound.play();
			setTimeout(() => {
				card1.lastElementChild.classList.add('hidden');
				card1.firstElementChild.classList.remove('hidden');
				card2.lastElementChild.classList.add('hidden');
				card2.firstElementChild.classList.remove('hidden');
				// Apply shake animation to unmatched card1 and card2
				card1.classList.add('shake');
				card2.classList.add('shake');
				card1 = null;
				card2 = null;
			}, 750);
		}
	}
}

// Add EventListener to each card
	cardsArray.forEach((card, index) => {
		card.addEventListener('click', cardFlip);
	});
    // Optionally, reset the visibility of the cards here
	cardsArray.forEach(card => {
		card.lastElementChild.classList.add('hidden');
		card.firstElementChild.classList.remove('hidden');
	});

function updateCountdown() {
	countdownTime--;
	document.getElementById('countdown').innerHTML = `${countdownTime}sec`;
	if(countdownTime === 0){
		clearInterval(countdownInterval);
		setTimeout(() => {
			alert('GAME OVER!');
			disableCards();
		}, 1000);
	}
}

countdownInterval = setInterval(updateCountdown, 1000);

reset.addEventListener('click', resetGame);

// Function to disable cards
function disableCards() {
	cardsArray.forEach(card => {
		card.removeEventListener('click', cardFlip); // Remove event listener
	});
}

// Function to reset game
function resetGame() {
	// Reset parameters
	matchedPairs = 0;
	countdownTime = 90;
	countdownInterval;
	matchedCards = [];
    // Shuffle array
	shuffle(cardsArray);
    // Reorder of the HTML cards
	cardsArray.forEach(card => {
		container.appendChild(card);
	});
    // Add EventListener to each card
	cardsArray.forEach((card, index) => {
		card.addEventListener('click', cardFlip);
	});
    // Optionally, reset the visibility of the cards here
	cardsArray.forEach(card => {
		card.lastElementChild.classList.add('hidden');
		card.firstElementChild.classList.remove('hidden');
	});
	
	countdownInterval = setInterval(updateCountdown, 1000);
}