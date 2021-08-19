// Login
document.getElementById('login-submit').addEventListener('click', function (e) {
    e.preventDefault();
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    //check email and password authentication
    if (userEmail == 'nafi@gmail.com' && userPassword == '123') {
        window.location.href = 'banking.html';
    }

});