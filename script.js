
//var parameters = ("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,128}$");
var parameters = {
    upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    number: ["1","2","3","4","5","6","7","8","9"],
    special: ["#","?","!","@","$","%","^","&","*","-"],
  };
  function storeUserInput() {
    var passwordLength = window.prompt("How long would you like your password to be? Enter a length between 8 and 128 characters. ")
    passwordLength = parseInt(passwordLength)
       console.log(passwordLength);
       if (!passwordLength){
          window.alert("Please pick a valid selection." )
          return null;
          } else if (passwordLength > 128){
            window.alert("Please pick a valid selection." )
          return null;
          } else if (passwordLength < 8){
          window.alert("Please pick a valid selection." )
          return false;
        };
    var lowerCase = window.confirm("Would you like to include lowercase characters? Select OK for yes or Cancel for no.");
    var upperCase = window.confirm("Would you like to include uppercase characters? Select OK for yes or Cancel for no. ");
    var numbers = window.confirm("Would you like to include numbers?  Select OK for yes or Cancel for no.");
    var special = window.confirm("Would you like to include special characters? Select OK for yes or Cancel for no.");
        if (!lowerCase || !upperCase || !numbers || !special ){
          window.alert("Please choose at least one.")
          return false;
        }
      };
  storeUserInput();
  
  var randomNumber = function(chararray){
    var value = Math.floor(Math.random * (chararray.length));
    return value;
  };
  
  function generatePassword(){
  
    var chosen = storeUserInput[parameters.lowerCase + parameters.upperCase + parameters.number + parameters.special];
    while (randomNumber() % passwordLength === 0){
      if (lowerCase = true){
      return randomNumber(parameters.lowerCase);
  
       } else if (upperCase = true){
      return randomNumber(parameters.upperCase);
  
      }else if (numbers = true){
      return randomNumber(parameters.number);
  
      } else if (special = true){
      return randomNumber(parameters.special);
    }
     else window.prompt("Your password is " + chosen);
   console.log(generatePassword());
  
    }
  generatePassword();
  };
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate"); {
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
  
    passwordText.value = password;
  
  }
  writePassword();
  };
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
    //console.log(passwordLength);