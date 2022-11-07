const counterValue = document.querySelector(`#value`);
const counterButtons = document.querySelector(`#counter`);
const decrementButton = counterButtons.firstElementChild;
const incrementButton = counterButtons.lastElementChild;
console.log(counterButtons, counterValue, decrementButton, incrementButton)

let startNumber = 0;

function decrement() {
    startNumber -= 1;
    counterValue.textContent = startNumber;
};


function increment () {
    startNumber += 1;
    counterValue.textContent = startNumber;
}

decrementButton.addEventListener(`click`, decrement)

incrementButton.addEventListener(`click`, increment)