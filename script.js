const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

// Password validation function
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

// Example usage of validatePassword function
signUpButton.onclick = function() {
    let password = document.querySelector('input[type="password"]').value;
    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters long and contain both numbers and letters.");
        return;
    }
    // Continue with the signup process
}