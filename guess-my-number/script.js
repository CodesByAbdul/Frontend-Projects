const randomNumber = Math.ceil(Math.random() * 100);
let score = 10;
let highscore = "";

function check() {
	if (score >= 1) {
		const userInput = Number(document.getElementById("userInput").value);
	
		if (!userInput){
			feedback("😣 Enter a value");
		} else if (userInput === randomNumber){
			highscore = userInput;
			document.body.style.backgroundColor = "green";
			document.getElementById("result").innerHTML = userInput;
			feedback("✅ Correct answer!");
			scoreUpdate();
		} else if (userInput !== randomNumber) {
			userInput > randomNumber ?feedback("📈 Too high!") : feedback("📉 Too low!");
			scoreUpdate();
		}
	} else {
		feedback("⛔️ You lose!");
	}
}

document.querySelector("#playAgain").addEventListener("click", function() {
	location.reload();
});

function feedback(message){
	document.querySelector("#feedback").textContent = message;
}

function scoreUpdate() {
	score--;
	document.getElementById("score").innerHTML = "Score: " + score;
	document.getElementById("highscore").innerHTML = "Highcore: " + highscore;
}