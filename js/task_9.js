const refs = {
    widget: document.querySelector('.widget'),
    colorName: document.querySelector('.color'),
    changeColorBtn: document.querySelector('.change-color'),
    body: document.querySelector('body'),
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onColorChange() {
    refs.body.style.backgroundColor = getRandomHexColor();
    console.log(refs.body);
    refs.colorName.textContent = getRandomHexColor();
}

refs.changeColorBtn.addEventListener('click', onColorChange);