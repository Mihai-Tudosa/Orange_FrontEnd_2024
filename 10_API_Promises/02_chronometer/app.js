// // console.log(1);
// // setTimeout(() => console.log(4), 0);
// // console.log(2);
// // console.log(5);
// // setTimeout(() => console.log(3), 3000);

// // setTimeout(() => console.log(5), 2000);

// let i = 0;
// let j = 0;
// const timerID1 = setInterval(() => console.log(i++), 1000);
// const timerID2 = setInterval(() => console.log(j++), 1000);

let seconds = 0;
let minutes = 0;
let timerId;

const secondsSpan = document.getElementById("seconds-span");
const minutesSpan = document.getElementById("minutes-span");

function showSeconds() {
  let secondsString = seconds < 10 ? `0${seconds}` : seconds;
  secondsSpan.innerHTML = secondsString;
}

function showMinutes() {
  let minutesString = minutes < 10 ? `0${minutes}` : minutes;
  minutesSpan.innerHTML = minutesString;
}

const startButton = document.getElementById(`start`);
startButton.addEventListener(`click`, startTimer);

function startTimer() {
  timerId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    showSeconds();
    showMinutes();
  }, 1000);
  startButton.disabled = true;
  stopButton.enabled = false;
}

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopTimer);

function stopTimer() {
  clearTimeout(timerId);
  startButton.disabled = false;
  stopButton.disabled = false;
}

const resetButton = document.getElementById(`reset`);
resetButton.addEventListener("click", resetTimer);

function resetTimer() {
  clearInterval(timerId);
  secondsSpan.innerHTML = "00";
  minutesSpan.innerHTML = "00";
  seconds = 0;
  minutes = 0;
  startButton.disabled = false;
}
