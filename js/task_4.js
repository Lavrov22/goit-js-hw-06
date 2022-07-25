const spanRef = document.querySelector('#value');
const buttonDecRef = document.querySelector('[data-action = "decrement"]');
const buttonIncRef = document.querySelector('[data-action = "increment"]');

let counterValue = 0;
const increment = () => {
    counterValue += 1;
    spanRef.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    spanRef.textContent = counterValue;
}





buttonIncRef.addEventListener('click', increment);
buttonDecRef.addEventListener('click', decrement);

