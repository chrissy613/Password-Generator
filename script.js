// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters;
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers;
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars;
specialChars = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ".", ",", "'", "<", ">", "/", "?"];

var options
// Write password to the #password input
function writePassword() {
  numberImput = prompt("Your password can be 8 to 128 characters long. How many characters would you like?");
  if (!numberImput) {
    alert("Value necessary to proceed.")
  } else if (numberImput < 8 || numberImput > 128) {
    numberImput = prompt("An integer between 8 and 128 is required.")
  } else {
    confirmUpper = confirm("Would you like your password to contain uppercase letters?");
    confirmLower = confirm("Would you like your password to contain lowercase letters?");
    confirmNumbers = confirm("Would you like your password to contain numbers?");
    confirmSpecials = confirm("Would you like your password to contain special characters?");
  }
  var password = generatePassword(letters, numbers, specialChars);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return passwordText;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
