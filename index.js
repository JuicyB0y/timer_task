const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const target = new Date(0);

function init(secs) {
  target.setHours(secs / (60 * 60));
  target.setMinutes((secs / 60) % 60);
  target.setSeconds(secs % 60);
  target.setMilliseconds(0);
  timerEl.innerHTML = target.toTimeString().split(' ')[0];
}

function createTimerAnimator() {
  const time = target.getTime();
  target.setTime(time - 1000);
  timerEl.innerHTML = target.toTimeString().split(' ')[0];
  if (target.getHours() === 0 && target.getMinutes() === 0 && target.getSeconds() === 0) {
    clearInterval(handler);
  }
}
let handler;
// handler = setInterval(updateTimer, 1000);

// const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  let currvalue = e.target.value;

  e.target.value = currvalue.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
  clearInterval(handler);
  handler = setInterval(createTimerAnimator, 1000);

  const seconds = Number(inputEl.value);

  init(seconds);

  inputEl.value = '';
});
