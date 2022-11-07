const refs = {
  body: document.querySelector(`body`),
  button: document.querySelector(`.change-color`),
  spun: document.querySelector(`.color`),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function chengeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spun.textContent = getRandomHexColor();
}


refs.button.addEventListener(`click`, chengeColor)