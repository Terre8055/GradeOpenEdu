
function validatePassword() {
    // Get the password input element
    var passwordInput = document.getElementById("password");
  
    // Get the password value
    var password = passwordInput.value;
  
    // Check if the password is 9 characters long
    if (password.length == 9) {
      // Navigate to the specified URL if the password is valid
    window.location.assign("studentUI.html");
    
    } else {
      // Display an error message if the password is not valid
      alert("Error: Index Number must be 9 characters long");
    }
  }
  