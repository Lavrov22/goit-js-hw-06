const refs = {
    controls: document.querySelector('#controls'),
    createBtn: document.querySelector('[data-create]'),
    destroyBtn: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('#boxes'),
    input: document.querySelector('input'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
    const number = Number(refs.input.value);
    const boxesArr = [];
    for (let i = 0; i < number; i += 1) {
     
        const divSize = 30;
        let growingSize = divSize + i * 10;
        const boxItem = `<div style="width:${growingSize}px;
    height:${growingSize}px; background-color:${getRandomHexColor()}" ></div>`;
        boxesArr.push(boxItem);
    }  
  refs.boxes.insertAdjacentHTML('beforeend', boxesArr.join(''));
}

function destroyBoxes() {
    refs.boxes.innerHTML = '';
}

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);


