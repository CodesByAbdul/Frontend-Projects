// Get players Names:
/*const playerName1 = prompt("1st Player Name: ");
document.querySelector('.playerName1').textContent = playerName1;

const playerName2 = prompt("2nd Player Name: ");
document.querySelector('.playerName2').textContent = playerName2;*/

// Selection of elements:
const player0 = document.querySelector('.player0');
const player1 = document.querySelector('.player1');
const total1 = document.querySelector('.total0');
const total2 = document.querySelector('.total1');
const current1 = document.querySelector('.current0');
const current2 = document.querySelector('.current1');
const dice = document.querySelector('.diceResult');
const rollDice = document.querySelector('.rollDice');
const hold = document.querySelector('.hold');
const resetGame = document.querySelector('.reset');

// page setup:
total1.textContent = 0;
total2.textContent = 0;
current1.textContent = 0;
current2.textContent = 0;

let currentScore = 0;
const totalScore = [0, 0];
let activePlayer = 0;

// Roll Dice Function:
const rollDiceFunction = function(){
	// Get a random dice number
	const diceResult = Math.ceil(Math.random() * 6);
	dice.src = `pictures/dice${diceResult}.png`;
	dice.classList.remove('hidden');
	// Check if dice number not 1
	if (diceResult !== 1) {
		currentScore += diceResult;
		document.querySelector(`.current${activePlayer}`).textContent = currentScore;
	} else {
	// if dice number is 1, switch player
		switchPlayer();
	}
}

// Switch Player Function:
const switchPlayer = function() {
	currentScore = 0;
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	//currentScore = 0;
	document.querySelector(`.current${activePlayer}`).textContent = currentScore;
	player0.classList.toggle('activePlayer');
	player1.classList.toggle('activePlayer');
}

// Hold Function:
const holdFunction = function(){
	totalScore[activePlayer] += currentScore;
	document.querySelector(`.total${activePlayer}`).textContent = totalScore[activePlayer];
	if (totalScore[activePlayer] >= 100){
		document.querySelector(`.player${activePlayer}`).classList.add('playerWins');
		document.querySelector('.playerWins').textContent = `PLAYER ${activePlayer + 1} WON 🎉`;
		alert(document.querySelector('.playerWins').textContent);
		dice.classList.add('hidden');
		rollDice.removeEventListener('click', rollDiceFunction);
		hold.removeEventListener('click', holdFunction);
	} else {
		switchPlayer();
	}
}

// User rolls dice:
rollDice.addEventListener('click', rollDiceFunction);

// User hold
hold.addEventListener('click', holdFunction);

// User Reset Game
resetGame.addEventListener('click', function() {
	location.reload();
});