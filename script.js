// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global Varibles/////////////////
var  generatePassword
var PassLength
var Numbers
var UpperCase
var LowCase
var SymbolsCont

console.log(PassLength)
console.log(Numbers)
console.log(UpperCase)
console.log(LowCase)
console.log(SymbolsCont)


//Funtion//////////////////
function generatePassword(){
  PassLength = prompt('How long do you want your password? 8-128')
  if (PassLength < 7 || PassLength > 128) {
    alert('Please Insert a proper Length')
  }
  console.log(PassLength)
  Numbers = confirm('Do you want to use numbers?')
  console.log(Numbers)
  UpperCase = confirm('Do you want to us Upper Case Letters?')
  console.log(UpperCase)
  LowCase = confirm('Do you want to use Lower Case Letters?')
  console.log(LowCase)
  SymbolsCont = confirm('Would you like to add symbols too? They Add more security!')
  console.log(SymbolsCont)
}










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
