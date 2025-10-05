let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');
let lapsList = document.getElementById('lapsList');

let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let interval;

function updateTimer() {
  milliseconds += 10;
  if (milliseconds >= 1000) { milliseconds = 0; seconds++; }
  if (seconds >= 60) { seconds = 0; minutes++; }
  if (minutes >= 60) { minutes = 0; hours++; }

  timer.textContent =
    (hours < 10 ? '0'+hours : hours) + ':' +
    (minutes < 10 ? '0'+minutes : minutes) + ':' +
    (seconds < 10 ? '0'+seconds : seconds) + ':' +
    (milliseconds < 100 ? (milliseconds < 10 ? '00'+milliseconds : '0'+milliseconds) : milliseconds);
}

// Start
startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(updateTimer, 10);
});

// Pause
pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
});

// Reset
resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  hours = minutes = seconds = milliseconds = 0;
  timer.textContent = '00:00:00:000';
  lapsList.innerHTML = '';
});

// Lap
lapBtn.addEventListener('click', () => {
  let lapItem = document.createElement('li');
  lapItem.textContent = timer.textContent;
  lapsList.prepend(lapItem);
});
