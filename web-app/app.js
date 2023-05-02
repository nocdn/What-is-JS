let timerRef = document.querySelector(".timerDisplay");
let startButton = document.getElementById("startTimer");

let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

startButton.addEventListener("click", () => {
  if (!isRunning) {
    startTime = performance.now() - elapsedTime;
    isRunning = true;
    startButton.textContent = "Stop";
    requestAnimationFrame(updateDisplay);
  } else {
    elapsedTime = performance.now() - startTime;
    isRunning = false;
    startButton.textContent = "Start";
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
