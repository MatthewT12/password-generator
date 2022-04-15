// Assignment code here
function generatePassword() {
  //research how to use confirm in javascript
  //TODO: create prompts for password criteria
  //create variables 
  //TODO: create a prompt for password length --> 8 - 128 
  //TODO: create different password criteria --> uppercase, lowercase, etc.
  //TODO: randomize the characters to generate the password
  //TODO: return password for use in other functions

  var passwordSize = window.prompt("Enter size of password (8 - 128 characters)");

  /*if (passwordSize < 8) {
    alert("The password must be at least 8 characters long!")
    return null;
  }
  if (passwordSize > 129) {
    alert("The password must be at most 128 characters long!")
    return null;
  }*/

  if (passwordSize < 8 || passwordSize > 129) {
    alert("The password must meet the character length requirements!")
    generatePassword();
  }
  console.log(passwordSize)
  /*if (passwordSize = "a", "b", "c") {
    alert("Cannot use letters for password length!")
    generatePassword();
  }*/

  var userInputArray = [];

  var isLowerCase = window.confirm("Do you want your password to include lowercase?")
  console.log(isLowerCase)

  if (isLowerCase === true) {
    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    userInputArray = lowerCaseArray.concat(userInputArray);
    console.log(userInputArray)
    //console.log(lowerCaseArray)
  }

  var isUpperCase = window.confirm("Do you want your password to include uppercase?")
  console.log(isUpperCase)

  if (isUpperCase === true) {
    var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    userInputArray = upperCaseArray.concat(userInputArray);
    console.log(userInputArray)
    //console.log(upperCaseArray)
  }

  var isNumbers = window.confirm("Do you want your password to include numbers?")
  console.log(isNumbers)

  if (isNumbers === true) {
    var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    userInputArray = numbersArray.concat(userInputArray);
    console.log(userInputArray)
    //console.log(numbersArray)
  }

  var isSpecialCharacters = window.confirm("Do you want your password to include special characters?")
  console.log(isSpecialCharacters)

  if (isSpecialCharacters === true) {
    var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", ",", ".", "<", ">", "-", "_", "+", "="];
    userInputArray = specialCharactersArray.concat(userInputArray);
    console.log(userInputArray)
    //console.log(specialCharactersArray)
  }

  if (!isLowerCase && !isUpperCase && !isNumbers && !isSpecialCharacters) {
    alert("You need to select at least one requirement!");
    generatePassword();
  }

  /*if (!isLowerCase && !isUpperCase && !isNumbers && !isSpecialCharacters) {
    alert("You need to select at least one requirement!");
    generatePassword(); 
  }*/
  
  
  /*switch (isLowerCase, isUpperCase, isNumbers, isSpecialCharacters) {
    default: window.alert("You need to select at least one requirement!");
    
  }*/

  
  var passwordArray = [lowerCaseArray, upperCaseArray, numbersArray, specialCharactersArray];
  console.log(passwordArray)

  var text = "";

  for ( var i = 0; i < passwordSize; i++) {
    var password = userInputArray[Math.floor(Math.random() * userInputArray.length)];
    console.log(password)
    text + password;
  }
  
  return text;

  
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
