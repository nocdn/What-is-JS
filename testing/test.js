const timerButton = document.getElementById("timerButton");
const timerDisplay = document.getElementById("timerDisplay");

let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  timerDisplay.textContent = (elapsedTime / 1000).toFixed(2);
  timer = setTimeout(updateTimer, 100);
}

timerButton.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    updateTimer();
    timerButton.textContent = "Stop Timer";
  } else {
    clearTimeout(timer);
    timerButton.textContent = "Start Timer";
  }
  isRunning = !isRunning;
});
