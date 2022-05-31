function onLoginFormSubmit(event) {
    event.preventDefault();
    //debugger;
    console.log('onLoginFormSubmit');
    var emailAddressInput = document.getElementById('email-address')
    var passwordInput = document.getElementById('password')
    console.log({
      email: emailAddressInput.value,
      password: passwordInput.value
    });
    
  }