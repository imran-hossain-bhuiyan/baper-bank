
const submit = document.getElementById('submit');
submit.addEventListener('click', function(){

    // Get User email
    const userEmailInput = document.getElementById('user-email');
    const userEmail = userEmailInput.value;

     // Get User Password

    const userPassInput = document.getElementById('user-password');
    const userPassword = userPassInput.value;

     // check validation

    if( userEmail == 'imran@gmail.com' && userPassword == 'fahim'){
        window.location.href = 'banking.html';
    }
    else{
        alert('Wrong E-mail or Password');
    }


})