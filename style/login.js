// step 1 Add event handler in the button
document.getElementById('submit-btn').addEventListener('click',function(){
    // step 2 get the email address inside the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step 3 get the password
    const passwordField = document.querySelector('#user-password');
    const password = passwordField.value;

    // do not verify email and password on the client site

    //step 4 verify email and password

    if (email === 'test@gmail.com'){
        if(password === 'password'){
            window.location.href="bank.html"
        } else {
            alert('Please insert a correct password')
        }
    } else{
        alert('Invalid user, Enter the user Email')
    }

})