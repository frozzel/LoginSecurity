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
var genpass=[]
var password
var Reset;

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

//////////////////////////////////////////////Function////////////////////////////

function CharLength(){
  PassLength= prompt('How long do you want your password? 8-128')
  if (PassLength < 7 || PassLength > 128){
    alert('Please Insert a propper Length')
    CharLength()
    return false;
    
  } 
  console.log(PassLength)
}

function Allinfo(){
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
  } if (confirm('Do you want to us Upper Case Letters?')){
    LowCase=true;
    SetChar=SetChar.concat(LowArray);
    console.log(SetChar);
    console.log(LowCase)
  } if (confirm('Would you like to add symbols too? They Add more security!')){
    SymbolsCont=true;
    SetChar=SetChar.concat(SymbolsArray);
    console.log(SetChar);
    console.log(SymbolsCont);
  } if (SetChar.length === (0)){
    alert('!!!!You Must Choose One!!!!')
    Allinfo()
    return false
  }
  
  
 } 

 function ResetPass(){
  
  PassLength= undefined
  Numbers= true
  UpperCase= true
  LowCase= true
  SymbolsCont= true
  SetChar= [];
  genpass=[];
  password= undefined;
 
 }

function generatePassword(){
  CharLength()
  Allinfo()
  RanDumb()
  console.log(password)
  console.log(PassLength)
  console.log(SetChar)
}
////////////////////////////////////////Logic//////////////////////////////

function RanDumb (){
  for (var i =0; i < PassLength; i++){
    genpass.push(SetChar[Math.floor(Math.random()*SetChar.length)]);
    password= genpass.toString("").replaceAll(",", " ");
  }
  console.log(genpass)
  console.log(password)
}


// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  ResetPass()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
