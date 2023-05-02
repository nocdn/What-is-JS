let timerRef = document.querySelector(".timerDisplay");
let startButton = document.getElementById("startTimer");

let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let clicks = 0;

startButton.addEventListener("click", () => {
  clicks++;

  if (clicks === 1) {
    // Start timer
    startTime = performance.now() - elapsedTime;
    isRunning = true;
    startButton.textContent = "Pause";
    startButton.style.backgroundColor = "orange";
    startButton.style.color = "black";
    requestAnimationFrame(updateDisplay);
  } else if (clicks === 2) {
    // Pause timer
    elapsedTime = performance.now() - startTime;
    isRunning = false;
    startButton.textContent = "Reset";
    startButton.style.backgroundColor = "red";
    startButton.style.color = "white";
  } else {
    // Reset timer
    elapsedTime = 0;
    startTime = 0;
    timerRef.innerHTML = "00<span>:</span>00<span>:</span>00<span>:</span>000";
    startButton.textContent = "Start";
    startButton.style.backgroundColor = "";
    startButton.style.color = "";
    clicks = 0;
  }
});

function updateDisplay(timestamp) {
  if (!isRunning) return;

  elapsedTime = timestamp - startTime;
  let totalMilliseconds = Math.floor(elapsedTime);

  let milliseconds = totalMilliseconds % 1000;
  let totalSeconds = Math.floor(totalMilliseconds / 1000);
  let seconds = totalSeconds % 60;
  let totalMinutes = Math.floor(totalSeconds / 60);
  let minutes = totalMinutes % 60;
  let hours = Math.floor(totalMinutes / 60);

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerRef.innerHTML = `${h}<span>:</span>${m}<span>:</span>${s}<span>:</span>${ms}`;
  requestAnimationFrame(updateDisplay);
}
