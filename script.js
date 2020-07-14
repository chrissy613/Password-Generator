// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters;
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers;
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars;
specialChars = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ".", ",", "'", "<", ">", "/", "?"];


// Write password to the #password input
function writePassword() {
  prompt("Your password can be 8 to 128 characters long. How many characters would you like?")
  confirm("Would you like your password to contain uppercase letters?")
  confirm("Would you like your password to contain lowercase letters?")
  confirm("Would you like your password to contain numbers?")
  confirm("Would you like your password to contain special characters?")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  password = letters + numbers + specialChars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
