

const refs = {
    input: document.querySelector('#validation-input'),
   
}

function onChangeColor(event) {
    const longContent = event.currentTarget.value.length;
    const dataLength = event.currentTarget.dataset.length;

    if (longContent >= dataLength) {
        refs.input.classList.remove(`invalid`);
        refs.input.classList.add(`valid`);
    } if (longContent < dataLength) {
        refs.input.classList.remove(`valid`);
        refs.input.classList.add(`invalid`);  
    }
    };

refs.input.addEventListener(`blur`, onChangeColor);
