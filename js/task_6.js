const inputRef = document.querySelector('#validation-input');
console.log(Number(inputRef.dataset.length));





function onInputLength(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else{inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');}
}

inputRef.addEventListener('blur', onInputLength);