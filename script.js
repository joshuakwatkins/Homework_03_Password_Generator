// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numChar = ['0','1','2','3','4','5','6','7','8','9'];
var specChar = ['!','@','#','$','%','^','&','*'];



// This is the if tree i built to utilize the user's choices to generate an array of the appropriate characters. It seems v sloppy, so I re-did it as a switch statement below. 
// var custLowChoice = false;
// var custUpChoice = false;
// var custNumChoice = false;
// var custSpecChoice = true;
// var charPool;

// if (custLowChoice) {
//   if (custUpChoice) {
//     if (custNumChoice) {
//       if (custSpecChoice) {
//         charPool = lowCaseChar.concat(upCaseChar.concat(numChar.concat(specChar)));
//       } else {
//         charPool = lowCaseChar.concat(upCaseChar.concat(numChar));
//       }
//     } else if(custSpecChoice) {
//       charPool = lowCaseChar.concat(upCaseChar.concat(specChar));
//     } else {
//       charPool = lowCaseChar.concat(upCaseChar);
//     }
//   } else if (custNumChoice) {
//     if (custSpecChoice) {
//       charPool = lowCaseChar.concat(numChar.concat(specChar));
//     } else {
//       charPool = lowCaseChar.concat(numChar);
//     }
//   } else if (specChar) {
//     charPool = lowCaseChar.concat(specChar);
//   } else {
//     charPool = lowCaseChar;
//   }
// } else if (custUpChoice) {
//   if (custNumChoice) {
//     if (custSpecChoice) {
//       charPool = upCaseChar.concat(numChar.concat(specChar));
//     } else {
//       charPool = upCaseChar.concat(numChar);
//     }
//   } else if (custSpecChoice) {
//     charPool = upCaseChar.concat(specChar);
//   } else {
//     charPool = upCaseChar;
//   }
// } else if (custNumChoice) {
//   if (custSpecChoice) {
//     charPool = numChar.concat(specChar);
//   } else {
//     charPool = numChar;
//   }
// } else if (specChar) {
//   charPool = specChar;
// } else {
//   console.log("There are not enough character options to generate a password");
// }
// console.log(charPool);


// This is the object I use to store all the user's choices through the prompts.
var figures = {
  pwLength: 0,
  userLow: false,
  userUp: false,
  userNum: false,
  userSpec: false,
}

var NewPassword;
var figPool = [];
// var pwLength = 16;


//This is the switch statement. It didn't clean things up as much as I thought it would in regards to raw amount of code (surely there is a procedural way to do this instead of checking each possible combination of states) but here it is.
// I moved it to within the function below.
// switch (true) {
//   case figures.userLow && figures.userUp && figures.userNum && figures.userSpec:
//     figPool = lowCaseChar.concat(upCaseChar.concat(numChar.concat(specChar)));
//   break;
//   case figures.userLow && figures.userUp && figures.userNum && !figures.userSpec:
//     figPool = lowCaseChar.concat(upCaseChar.concat(numChar));
//   break;
//   case figures.userLow && figures.userUp && !figures.userNum && figures.userSpec:
//     figPool = lowCaseChar.concat(upCaseChar.concat(specChar));
//   break;
//   case figures.userLow && figures.userUp && !figures.userNum && !figures.userSpec:
//     figPool = lowCaseChar.concat(upCaseChar);
//   break;
//   case figures.userLow && !figures.userUp && figures.userNum && figures.userSpec:
//     figPool = lowCaseChar.concat(numChar.concat(specChar));
//   break;
//   case figures.userLow && !figures.userUp && figures.userNum && !figures.userSpec:
//     figPool = lowCaseChar.concat(numChar);
//   break;
//   case figures.userLow && !figures.userUp && !figures.userNum && figures.userSpec:
//     figPool = lowCaseChar.concat(specChar);
//   break;
//   case figures.userLow && !figures.userUp && !figures.userNum && !figures.userSpec:
//     figPool = lowCaseChar;
//   break;
//   case !figures.userLow && figures.userUp && figures.userNum && figures.userSpec:
//     figPool = upCaseChar.concat(numChar.concat(specChar));
//   break;
//   case !figures.userLow && figures.userUp && figures.userNum && !figures.userSpec:
//     figPool = upCaseChar.concat(numChar);
//   break;
//   case !figures.userLow && figures.userUp && !figures.userNum && figures.userSpec:
//     figPool = upCaseChar.concat(specChar);
//   break;
//   case !figures.userLow && figures.userUp && !figures.userNum && !figures.userSpec:
//     figPool = upCaseChar;
//   break;
//   case !figures.userLow && !figures.userUp && figures.userNum && figures.userSpec:
//     figPool = numChar.concat(specChar);
//   break;
//   case !figures.userLow && !figures.userUp && figures.userNum && !figures.userSpec:
//     figPool = numChar;
//   break;
//   case !figures.userLow && !figures.userUp && !figures.userNum && figures.userSpec:
//     figPool = specChar;
//   break;
//   case !figures.userLow && !figures.userUp && !figures.userNum && !figures.userSpec:
//     figPool = console.log("There aren't enough available characters to generate you a password.");
//   break;    
// }
//


// After talking with a TA about the best way to shrink my code we worked together to establish the code structure below. This huge nested switch assembles the array that satisfies the criteria set by the user and returns a result from that array - however this problematically does not guarantee that all selected character sets will be included.
// After researching validation options and discussing it with a TA i decided to abandon this structure in favor of one that requires no validation - even if it is at the cost of a small degree of the random factor.
// This works to return a password, just didn't get far enough into it.
// function generatePassword() {
//   figures.pwLength = window.prompt("How many characters would you like in your password?");
//   if (figures.pwLength < 8 || figures.pwLength > 128) {
//     window.alert("Your password must be between 8 and 128, please choose an appropriate value.");
//     return;
//   } else {
//   figures.userLow = window.confirm("Would you like to use lower case characters in your password?");
//   figures.userUp = window.confirm("Would you like to use upper case characters in your password?");
//   figures.userNum = window.confirm("Would you like to use numerical characters in your password?");
//   figures.userSpec = window.confirm("Would you like to use special characters in your password?");
//   }
//   switch (true) {
//     case figures.userLow && figures.userUp && figures.userNum && figures.userSpec:
//       figPool = lowCaseChar.concat(upCaseChar.concat(numChar.concat(specChar)));
//     break;
//     case figures.userLow && figures.userUp && figures.userNum && !figures.userSpec:
//       figPool = lowCaseChar.concat(upCaseChar.concat(numChar));
//     break;
//     case figures.userLow && figures.userUp && !figures.userNum && figures.userSpec:
//       figPool = lowCaseChar.concat(upCaseChar.concat(specChar));
//     break;
//     case figures.userLow && figures.userUp && !figures.userNum && !figures.userSpec:
//       figPool = lowCaseChar.concat(upCaseChar);
//     break;
//     case figures.userLow && !figures.userUp && figures.userNum && figures.userSpec:
//       figPool = lowCaseChar.concat(numChar.concat(specChar));
//     break;
//     case figures.userLow && !figures.userUp && figures.userNum && !figures.userSpec:
//       figPool = lowCaseChar.concat(numChar);
//     break;
//     case figures.userLow && !figures.userUp && !figures.userNum && figures.userSpec:
//       figPool = lowCaseChar.concat(specChar);
//     break;
//     case figures.userLow && !figures.userUp && !figures.userNum && !figures.userSpec:
//       figPool = lowCaseChar;
//     break;
//     case !figures.userLow && figures.userUp && figures.userNum && figures.userSpec:
//       figPool = upCaseChar.concat(numChar.concat(specChar));
//     break;
//     case !figures.userLow && figures.userUp && figures.userNum && !figures.userSpec:
//       figPool = upCaseChar.concat(numChar);
//     break;
//     case !figures.userLow && figures.userUp && !figures.userNum && figures.userSpec:
//       figPool = upCaseChar.concat(specChar);
//     break;
//     case !figures.userLow && figures.userUp && !figures.userNum && !figures.userSpec:
//       figPool = upCaseChar;
//     break;
//     case !figures.userLow && !figures.userUp && figures.userNum && figures.userSpec:
//       figPool = numChar.concat(specChar);
//     break;
//     case !figures.userLow && !figures.userUp && figures.userNum && !figures.userSpec:
//       figPool = numChar;
//     break;
//     case !figures.userLow && !figures.userUp && !figures.userNum && figures.userSpec:
//       figPool = specChar;
//     break;
//     case !figures.userLow && !figures.userUp && !figures.userNum && !figures.userSpec:
//       figPool = console.log("There aren't enough available characters to generate you a password.");
//     break;    
//   }
//   newPassword = "";
//   for (var i = 0; i < figures.pwLength; i++) {
//     newPassword += figPool[Math.floor(Math.random() * figPool.length)];
//   }
//   return newPassword;
  
// };

// After speaking with a TA it was determined that this was a better way to structure my code - as I was overthinking validating a truly random generated password against the criteria selected by the user.
// Instead, here, when a criteria is set by the user, a random character from that set is inserted into the password, guaranteeing that we will meet the chosen criteria.
// After generation, in order to get back to 'true' random we shuffle the password string. 
function generatePassword () {
  // declaring the variables newPassword and figPool as empty here at the top of the function means that each time it is run the available character pool is reset.
  newPassword = '';
  figPool = [];
  counter = 0
  figures.pwLength = window.prompt("How many characters would you like in your password?");
  // this validates the user's input as a valid numerical value.
  if (isNaN(figures.pwLength) || figures.pwLength < 8 || figures.pwLength > 128) {
    window.alert("Your password must be a number between 8 and 128, please choose an appropriate value.");
    return;
  } else {
  figures.userLow = window.confirm("Would you like to use lower case characters in your password?");
  figures.userUp = window.confirm("Would you like to use upper case characters in your password?");
  figures.userNum = window.confirm("Would you like to use numerical characters in your password?");
  figures.userSpec = window.confirm("Would you like to use special characters in your password?");
  }
 //the following builds the array from which the password characters are drawn.
  if (figures.userLow) {
    figPool.push(...lowCaseChar);
    newPassword += (lowCaseChar[Math.floor(Math.random() * lowCaseChar.length)]);
    counter ++;
  } 
  if (figures.userUp) {
    figPool.push(...upCaseChar);
    newPassword += (upCaseChar[Math.floor(Math.random() * upCaseChar.length)]);
    counter ++;
  }
  if (figures.userNum) {
    figPool.push(...numChar);
    newPassword += (numChar[Math.floor(Math.random() * numChar.length)]);
    counter ++;
  }
  if (figures.userSpec) {
    figPool.push(...specChar);
    newPassword += (specChar[Math.floor(Math.random() * specChar.length)]);
    counter ++;
  }
  if (figPool.length < 8) {
    window.alert("There are insufficient characters available to execute your password generation.");
    return;
  }
  for (var i = 0; i < figures.pwLength-counter; i++) {
    newPassword += figPool[Math.floor(Math.random() * figPool.length)];
  }
  // This function sorts the procedurally generated password's up-to-4 initial guaranteed-from-set characters into a random order with the rest.
  function shuffle(newPassword) {
    var passToArray = newPassword.split('');
    passToArray.sort(function() {
      return 0.5 - Math.random();
    });
    securePassword = passToArray.join('');
    return securePassword;                        
  };
  securePassword = shuffle(newPassword);
  console.log("This is the unjumbled password: " + newPassword);
  console.log("This is the array with the customers chosen characters: " + figPool);
  console.log("This is the secure password: " + securePassword);
  return securePassword;  //this is the desired result.
}


