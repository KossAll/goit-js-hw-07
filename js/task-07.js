const refs = {
    input: document.querySelector(`#font-size-control`),
    content: document.querySelector(`#text`),
}

const onChangeFontSize = (event) => {
    const currentValueFontSize = Number(event.target.value);
    refs.content.style.fontSize = `${currentValueFontSize}px`;
};

refs.input.addEventListener(`input`, onChangeFontSize);
