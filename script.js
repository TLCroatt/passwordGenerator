// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword() {
  
    while(confirmLength <=8 || confirmLength >=128) {
      var confirmLength = prompt("Password length may be between 8 - 128 characters. How long would you like your password to be?")
    } 
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
