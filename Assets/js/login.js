document.getElementById('btn-submit').addEventListener('click', function(){
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
  
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
  
    if(email === 'admin' && password ==='1234'){
        window.location.href = 'movieList.html';
    }
    else{
        alert('Your email or password is wrong, please enter correct password');
    }
})