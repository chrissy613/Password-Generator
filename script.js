// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers;
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars;
specialChars = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ".", ",", "'", "<", ">", "/", "?"];
var options
var confirmUpper, confirmLower, confirmNumber, confirmSpecials, numberImput;


// Write password to the #password input
function writePassword() {
  //PROMPT AND CONFIRMS
  numberImput = prompt("Your password can be 8 to 128 characters long. How many characters would you like?");
  if (!numberImput) {
    alert("Value necessary to proceed.")
  } else if (numberImput < 8 || numberImput > 128) {
    numberImput = prompt("An integer between 8 and 128 is required.")
  } else {
    confirmUpper = confirm("Would you like your password to contain uppercase letters?");
    confirmLower = confirm("Would you like your password to contain lowercase letters?");
    confirmNumber = confirm("Would you like your password to contain numbers?");
    confirmSpecials = confirm("Would you like your password to contain special characters?");
  }
  //IF NO OPTIONS ARE SELECTED
  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecials) {
    alert("You cannot create a password without choosing options.");
  }
  //ELSE IF WITH ONE OPTION SELECTED
  else if (confirmUpper && !confirmLower && !confirmNumber && !confirmSpecials) {
    alert("Password created with uppercase letters.");
  }
  else if (!confirmUpper && confirmLower && !confirmNumber && !confirmSpecials) {
    alert("Password created with lowercase letters.");
  }
  else if (!confirmUpper && !confirmLower && confirmNumber && !confirmSpecials) {
    alert("Password created with numbers.");
  }
  else if (!confirmUpper && !confirmLower && !confirmNumber && confirmSpecials) {
    alert("Password created with special characters.");
  }
  //ELSE IF WITH TWO OPTIONS SELECTED
  else if (confirmUpper && confirmLower && !confirmNumber && !confirmSpecials) {
    alert("Password created with uppercase and lowercase letters");
  }
  else if (confirmUpper && !confirmLower && confirmNumber && !confirmSpecials) {
    alert("Password created with uppercase letters and numbers.");
  }
  else if (confirmUpper && !confirmLower && !confirmNumber && confirmSpecials) {
    alert("Password created with uppercase letters and special characters.");
  }
  else if (!confirmUpper && confirmLower && confirmNumber && !confirmSpecials) {
    alert("Password created with lowercase letters and numbers.");
  }
  else if (!confirmUpper && confirmLower && !confirmNumber && confirmSpecials) {
    alert("Password created with lowercase letters and special characters.");
  }
  else if (!confirmUpper && !confirmLower && confirmNumber && confirmSpecials) {
    alert("Password created with numbers and special characters.");
  }
  //ELSE IF WITH THREE OPTIONS SELECTED
  else if (confirmUpper && confirmLower && confirmNumber && !confirmSpecials) {
    alert("Password created with uppercase letters, lowercase letters, and numbers.");
  }
  else if (confirmUpper && confirmLower && !confirmNumber && confirmSpecials) {
    alert("Password created with uppercase letters, lowercase letters, and special characters.");
  }
  else if (confirmUpper && !confirmLower && confirmNumber && confirmSpecials) {
    alert("Password created with uppercase letters, numbers and special characters.");
  }
  else if (!confirmUpper && confirmLower && confirmNumber && confirmSpecials) {
    alert("Password created with lowercase letters, numbers, and special characters.");
  }
  //ALL OPTIONS SELECTED
  else if (confirmUpper && confirmLower && confirmNumber && confirmSpecials) {
    alert("Password created with all options.");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(){
  var combineCharacters = [];
  if (confirmUpper) {
    combineCharacters = combineCharacters.concat(uppercaseLetters)
  }
  if (confirmLower) {
    combineCharacters = combineCharacters.concat(lowercaseLetters)
  }
  if (confirmNumber) {
    combineCharacters = combineCharacters.concat(numbers)
  }
  if (confirmSpecials) {
    combineCharacters = combineCharacters.concat(specialChars)
  }
console.log(combineCharacters);
var generatedPW = "";
for (var i = 0; i < numberImput; i++) {
    var randomIndex = Math.floor(Math.random() * combineCharacters.length);
    generatedPW += combineCharacters[randomIndex];
    console.log(generatedPW);
    console.log(randomIndex);
  }
  return generatedPW
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
