// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var numeric = '1234567890'
var specialChar = '!@#$%^&*?'
var selectedChar = ''
var length = prompt("Password length must be between 8 - 128 characters. How long would you like your password to be?")


while(length <=8 || length >=128) {
    length = prompt("Password length must be between 8 - 128 characters. How long would you like your password to be?");
    console.log("length", length);
}



function hasUpperCase() {
    var upperCase = confirm("Do you want to use upper case letters?");
    console.log("upperCase", upperCase);
    return upperCase;
}

function hasLowerCase() {
    var lowerCase = confirm("Do you want to use lower case letters?");
    console.log("lowerCase", lowerCase);
    return lowerCase;
}

function hasNumeric() {
    var num = confirm("Do you want to use numbers?");
    console.log("num", num);
    return num;
}

function hasSpecialChar() {
    var specialChar = confirm("Do you want to use special characters?");
    console.log("specialChar", specialChar);
    return specialChar;
}

var password = ''

function generatePassword() {
    var upperChar = hasUpperCase()
    var lowerChar = hasLowerCase()
    var num = hasNumeric()
    var specialCharInput = hasSpecialChar()

    password = ''
    if (upperChar) {
        selectedChar = selectedChar + upperCase
        password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if (lowerChar) {
        selectedChar = selectedChar + lowerCase
        password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if (num) {
        selectedChar = selectedChar + numeric
        password = password + numeric[Math.floor(Math.random() * numeric.length)];
    }

    if (specialCharInput) {
        selectedChar = selectedChar + specialChar
        password = password + specialChar[Math.floor(Math.random() * specialChar.length)];
    }
   console.log("selectedChar", selectedChar);

   for (var i = password.length; i < length; i ++) {
       password = password + selectedChar[Math.floor(Math.random() * selectedChar.length)];
       document.querySelector("#password").innerHTML = password;
   } return password;

  }

 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//create 4 character type strings (vars) - special chars, numeric, lower case, upper case
//create a function to get all user input - length, inclusion of characters: upper, lower, numeric, special
//combine all strings for selected characters into one - store in a var
//pick from the super string as many times randomly for as long as the password is (n times) - store in a var
//write the string to html (line 16 - already done)