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

  var minPasswordLength = 8;
  var maxPasswordLength = 128;

  console.log(passwordSize)

  var isLowercase = window.confirm("Do you want your password to include lowercase?")

  console.log(isLowercase)

  var isUpperCase = window.confirm("Do you want your password to include uppercase?")

  console.log(isUpperCase)

  var isNumbers = window.confirm("Do you want your password to include numbers?")

  console.log(isNumbers)

  var isSpecialCharacters = window.confirm("Do you want your password to include special characters?")

  console.log(isSpecialCharacters)

  //return "fbgberfb";

  if (passwordSize.length < 8 ) {
    alert("The password must be at least 8 characters long!")
    return null;
  }

  



  
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
