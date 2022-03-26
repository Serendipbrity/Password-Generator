
// parameters for computer to randomly choose from 
var parameters = {
    upperCaseP: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowerCaseP: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numberP: ["1","2","3","4","5","6","7","8","9"],
    specialP: ["#","?","!","@","$","%","^","&","*","-"],
  };

// function to store users inputs
  function storeUserInput() {
    var passwordLength = window.prompt("How long would you like your password to be? Enter a length between 8 and 128 characters. ")
    passwordLength = parseInt(passwordLength)
       console.log(passwordLength);
       // if password length not within allowed range or nothing was input
       if (!passwordLength){
          window.alert("Please pick a valid selection." )
          return null;
          } else if (passwordLength > 128){
            window.alert("Please pick a valid selection." )
          return null;
          } else if (passwordLength < 8){
          window.alert("Please pick a valid selection." )
          return false;
        }
        // true/false inputs
        var lowercase = window.confirm("Would you like to include lowercase characters? Select OK for yes or Cancel for no.");
    console.log(lowercase);
    var uppercase = window.confirm("Would you like to include uppercase characters? Select OK for yes or Cancel for no. ");
    console.log(uppercase);
    var numbers = window.confirm("Would you like to include numbers?  Select OK for yes or Cancel for no.");
    console.log(numbers);
    var special = window.confirm("Would you like to include special characters? Select OK for yes or Cancel for no.");
    console.log(special);
        if (!lowercase && !uppercase && !numbers && !special ){
          window.alert("Please choose at least one.")
        
        };
      // store inputs
    return {
        passwordLength, 
        lowercase,
        uppercase,
        numbers,
        special,
    };
    };


    


 
  // random number generator
  var randomNumber = function(chararray){
    var index = Math.floor(Math.random() * (chararray.length));
    var char = chararray[index];
    console.log(char);
    return char;
  };
  


  
  function generatePassword(){
    var whole = [] 
    var chosen = storeUserInput();

    console.log(chosen);

    if (chosen.lowercase == true){whole = whole.concat(parameters.lowerCaseP)};
    if (chosen.uppercase == true){whole = whole.concat(parameters.upperCaseP)};
    if (chosen.numbers == true){whole = whole.concat(parameters.numberP)};
    if (chosen.special == true){whole = whole.concat(parameters.specialP)};

    var passContainer = ""

    for (var i = 0; i < chosen.passwordLength; i++){
        passContainer = passContainer + randomNumber(whole)
    
    }
    
    window.prompt("Your password is " + passContainer );
    
    }

  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate"); {

  // Write password to the #password input
  function writePassword(event) {
   

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

}