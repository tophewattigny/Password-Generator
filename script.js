// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  var length;
  var lowerCase;
  var upperCase;
  var numeric;
  var special;

  while (true) {
    length = parseInt(prompt("Enter password length (8-128 characters)"));

    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter password length (8-128 characters)");
    } else {
      break;
    }
  }
  while (true) {
    lowerCase = confirm("Do you want to include lowercase letters in your password?");
    upperCase = confirm("Do you want to include uppercase letters in your password?");
    numeric = confirm("Do you want to include numbers in your password?");
    special = confirm("Do you want to include special characters in your password?");

    if (!lowerCase && !upperCase && !numeric && !special) {
      alert("Please select a the characters you would like to use for your password");
    } else {
      break;
    }
  }

  var password = "";
  var chars = "";

  if (lowerCase) {
    chars += lowerCaseLetters;
  }

  if (upperCase) {
    chars += upperCaseLetters;
  }

  if (numeric) {
    chars += numbers;
  }

  if (special) {
    chars += symbols;
  }

  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
