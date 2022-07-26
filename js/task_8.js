const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email === ''){
        alert('Заполите полe Email!!!');
    } else if(password === ''){
        alert('Заполите полe Password!!!')
    } else {
        const formData = {
        email,
        password,
        }
         
    console.log(formData);
    }
    loginFormRef.reset();
  
}