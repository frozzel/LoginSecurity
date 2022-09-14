// Assignment Code
var generateBtn = document.querySelector("#generate");

///////////////////////////////////////////Global Varibles/////////////////
var generatePassword
var PassLength
var Numbers
var UpperCase
var LowCase
var SymbolsCont
var SetChar= []

console.log(PassLength)
console.log(Numbers)
console.log(UpperCase)
console.log(LowCase)
console.log(SymbolsCont)
console.log(SetChar)

////// ///////////////////////////////////Character Arrays///////////////////////

SymbolsArray =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
NumbArray =[0,1, 2, 3, 4, 5, 6, 7, 8, 9];
UpArray =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
LowArray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//////////////////////////////////////////////Funtion////////////////////////////
function CharLength(){
  PassLength = prompt('How long do you want your password? 8-128')
  if (PassLength < 7 || PassLength > 128) {
    alert('Please Insert a proper Length')
  }
  console.log(PassLength)
}

function Allinfo(){
  //Numbers = confirm('Do you want to use numbers?')
  if (confirm('Do you want to use numbers?')){
    Numbers=true;
    SetChar= SetChar.concat(NumbArray)
    console.log(SetChar)
    console.log(Numbers)
  } if (confirm('Do you want to us Upper Case Letters?')){
    UpperCase=true;
    SetChar=SetChar.concat(UpArray)
    console.log(SetChar)
    console.log(UpperCase)
  }
  return
  

 } 

 ///////////////////Add old needs added out of time :(  use new if else ^^^^^^^////////////////////
//   if {
//   UpperCase = confirm('Do you want to us Upper Case Letters?')
//   console.log(UpperCase)
//   LowCase = confirm('Do you want to use Lower Case Letters?')
//   console.log(LowCase)
//   SymbolsCont = confirm('Would you like to add symbols too? They Add more security!')
//   console.log(SymbolsCont)
// }
//}

function generatePassword(){
  CharLength()
  Allinfo()
  CharLength= PassLength
  Allinfo= SetChar
  console.log(PassLength)
  console.log(SetChar)
}










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
