//Element selection
const lapBtn = document.querySelector('.lapBtn');
const resetBtn = document.querySelector('.resetBtn');
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const lapList = document.querySelector('.lapList');
const time = document.getElementById('time');

//Stop watch count
let milliseconds = 0
let seconds = 0;
let minutes = 0;
let stopWatchCountInterval;
let lapCount = 1;
let lastLapTime = 0;
let currentTime = 0;
let lapTimeInterval;
let lowestLapTime = Infinity;
let highestLapTime = 0;

function updateStopWatch() {
	//increment milliseconds by 10 (100ms)
	milliseconds += 10;
	if (milliseconds >= 1000) {
		seconds++;
		milliseconds = 0;
	}
	if (seconds >= 60){
		minutes++;
		seconds = 0;
	}
	
	time.innerHTML = `${pad(minutes)}:${pad(seconds)}.${pad(Math.floor(milliseconds / 10))}`;
}

//zero padding Function 
function pad(number) {
	return (number < 10 ? '0' : '') + number;
}

//make Lap button inactive at start
lapBtn.classList.add('fade');

// click listener for lapBtn
const lapBtnClickListener = function(){
	let timeDiff;
	//calcute current time in milisec
	currentTime = (minutes * 60000) + (seconds * 1000) + milliseconds;
	// calculate the time difference
	timeDiff = currentTime - lastLapTime;
	//update last lap time
	lastLapTime = currentTime;
	
	const elem3 = document.createElement('hr');
	elem3.className = 'full-width';
	lapList.prepend(elem3);
	
	const elem2 = document.createElement('p');
	elem2.className = 'right';
	timeDiff = currentTime - lastLapTime;
	
	if (timeDiff < lowestLapTime){
		lowestLapTime = timeDiff;
		elem2.style.color = 'green';
		//elem1.style.color = 'green';
	} else if (timeDiff > highestLapTime) {
		highestLapTime = timeDiff;
		elem2.style.color = 'red';
		//elem1.style.color = 'red';
	}
	
	elem2.innerHTML = `${pad(Math.floor(timeDiff / 60000))}:${pad(Math.floor((timeDiff % 60000) / 1000))}.${pad(Math.floor(timeDiff % 10))}`;
	lapList.prepend(elem2);
	
	const elem1 = document.createElement('p');
	elem1.className = 'left';
	elem1.innerHTML = `Lap(${lapCount})`;
	lapList.prepend(elem1);
	
	lapCount++;
	
	// updating lap time
	lapTimeInterval = setInterval(function() {
		currentTime = (minutes * 60000) + (seconds * 1000) + milliseconds;
	// calculate the time difference
		let timeDiff = currentTime - lastLapTime;
		elem2.innerHTML = `${pad(Math.floor(timeDiff / 60000))}:${pad(Math.floor((timeDiff % 60000) / 1000))}.${pad(Math.floor(timeDiff % 100))}`;
	}, 10);
}

/* add event listener to lap button to clear the interval when clicked again */
lapBtn.addEventListener('click', function() {
	clearInterval(lapTimeInterval);
	lapTimeInterval = setInterval(function() {
		currentTime = (minutes * 60000) + (seconds * 1000) + milliseconds;
	// calculate the time difference
		let timeDiff = currentTime - lastLapTime;
		elem2.innerHTML = `${pad(Math.floor(timeDiff / 60000))}:${pad(Math.floor((timeDiff % 60000) / 1000))}.${pad(Math.floor(timeDiff % 100))}`;
	}, 10);
});


//Add eventListener to buttons
startBtn.addEventListener('click', function(){
	stopBtn.classList.remove('hide');
	startBtn.classList.add('hide');
	lapBtn.classList.remove('hide');
	resetBtn.classList.add('hide');
	//start timecount
	stopWatchCountInterval = setInterval(updateStopWatch, 10);
	updateStopWatch();
	
	// activate lap Button
	lapBtn.classList.remove('fade');
	lapBtn.addEventListener('click', lapBtnClickListener);
});

stopBtn.addEventListener('click', function(){
	stopBtn.classList.add('hide');
	startBtn.classList.remove('hide');
	lapBtn.classList.add('hide');
	resetBtn.classList.remove('hide');
	clearInterval(stopWatchCountInterval);
	
});

resetBtn.addEventListener('click', function(){
	resetBtn.classList.add('hide');
	lapBtn.classList.remove('hide');
	lapList.innerHTML = "";
	//make Lap button in active at start
	lapBtn.classList.add('fade');
	lapBtn.removeEventListener('click', lapBtnClickListener);
	milliseconds = 0;
	seconds = 0;
	minutes = 0;
	lapCount = 1;
	time.innerHTML = `${pad(minutes)}:${pad(seconds)}.${pad(Math.floor(milliseconds / 10))}`;
});