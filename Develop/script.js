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

  if (passwordSize < 8) {
    alert("The password must be at least 8 characters long!")
    return null;
  }
  if (passwordSize > 129) {
    alert("The password must be at most 128 characters long!")
    return null;
  }

  console.log(passwordSize)

  var isLowerCase = window.confirm("Do you want your password to include lowercase?")
  console.log(isLowerCase)

  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(lowerCaseArray)

  var isUpperCase = window.confirm("Do you want your password to include uppercase?")
  console.log(isUpperCase)

  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  console.log(upperCaseArray)

  var isNumbers = window.confirm("Do you want your password to include numbers?")
  console.log(isNumbers)

  var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbersArray)

  var isSpecialCharacters = window.confirm("Do you want your password to include special characters?")
  console.log(isSpecialCharacters)

  var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", ",", ".", "<", ">", "-", "_", "+", "="];
  console.log(specialCharactersArray)

  var passwordArray = [lowerCaseArray, upperCaseArray, numbersArray, specialCharactersArray];
  console.log(passwordArray)

  return null;

  /*if (passwordSize.length < 8 ) {
    alert("The password must be at least 8 characters long!")
    return null;
  }*/

  



  
  /*if (passwordSize.length >= minPasswordLength && passwordSize.length <= maxPasswordLength) {
        window.prompt("Do you want your password to include uppercase letters, lowercase letters, numbers, and special characters?");
        return "sdfjnrfnb";
      }
  else {
        alert("Please input between " +minPasswordLength+ " and " +maxPasswordLength+ " characters");
        return null;
      }
  */
  
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
