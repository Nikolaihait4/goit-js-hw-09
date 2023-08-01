const CHANGE_COLOR_DELAY = 1000;
const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickStart() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DELAY);
}

function onClickStop() {
  clearInterval(timerId);
}
