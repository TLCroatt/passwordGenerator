// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numeric = "1234567890"
var specialChar = "!@#$%^&*?"
var selectedChar = ""


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//create 4 character type strings (vars) - special chars, numeric, lower case, upper case
//create a function to get all user input - length, inclusion of characters: upper, lower, numeric, special; validate - if user gives garbage input, stop function
//combine all strings for selected characters into one - store in a var
//pick from the super string as many times randomly for as long as the password is (n times) - store in a var
//write the string to html (line 16 - already done)