const CHANGE_COLOR_DELAY = 1000;
let timerId = null;
const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.stop.disabled = true;
refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickStart() {
  refs.start.disabled = true;
  refs.stop.disabled = false;

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DELAY);
}

function onClickStop() {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(timerId);
}
