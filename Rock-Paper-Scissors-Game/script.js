"use strict"
	
let computerMove;
let result;
let playerScore = 0;
let compScore = 0;
let tieScore = 0;
let liveScore = 10;
let roundsPlayed = 0;
let playerName;

// Keep asking for player's name until a valid name is provided
while (!playerName) {
    playerName = prompt('Welcome to Rock-Paper-Scissors Game.\nEnter your name:');
}

function playRound(playerMove) {
    // Computer's move
    const pick = Math.random();
    if (pick < 1/3) {
        computerMove = 'rock';
    } else if (pick < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    // Determine the result
    if (playerMove === computerMove) {
        result = 'Tie';
        tieScore++;
    } else if ((playerMove === 'rock' && computerMove === 'scissors') ||
               (playerMove === 'paper' && computerMove === 'rock') ||
               (playerMove === 'scissors' && computerMove === 'paper')) {
        result = 'You Won';
        playerScore++;
    } else {
        result = 'You Lose';
        compScore++;
    }

	// Decrement lives
	liveScore--;

    // Update scores
	updateScoreDisplay();
    alert(`Round ${roundsPlayed + 1} Result:\n${playerName}: ${playerMove}\nComputer: ${computerMove}\nResult: ${result}`);

    // Increment rounds played
    roundsPlayed++;

    // Check if all rounds have been played
    if (roundsPlayed === 10) {
        // Display final scores
        displayFinalScores();

			const quitGame = confirm('Do you want to quit the game?');
        if (quitGame) {
            alert('Thanks for playing! Goodbye.');
				location.reload(); // Refresh the page
            return; // Exit the function, ending the game
        } else {
            // Reset game state for a new game
            playerScore = 0;
            compScore = 0;
            tieScore = 0;
            liveScore = 10;
            roundsPlayed = 0;
            updateScoreDisplay(); // Update score display
        }
    }
}

function displayFinalScores() {
    // Display final scores
    if (playerScore > compScore) {
        alert(`Final Score:\n${playerName}: ${playerScore}\nComputer: ${compScore}\nTie: ${tieScore}\n\nCongratulations! You're a champion.`);
    } else if (playerScore < compScore) {
        alert(`Final Score:\n${playerName}: ${playerScore}\nComputer: ${compScore}\nTie: ${tieScore}\n\nOoops, Computer won.`);
    } else {
        alert(`Final Score:\n${playerName}: ${playerScore}\nComputer: ${compScore}\nTie: ${tieScore}\n\nIt's a tie.`);
    }
}

function updateScoreDisplay() {
    const scoreElement = document.getElementById('updateScore');
    scoreElement.textContent = `${playerName} : ${playerScore}. Computer : ${compScore}. Tie : ${tieScore}. Lives : ${liveScore}`;
}
