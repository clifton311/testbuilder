// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // STEP TWO:
  // Nice work! Extend your function to support two popular networks, Visa and Mastercard:
  
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  // Once you've read this, go ahead and try to implement this function, then return to the console.
var detectNetwork = function(cardNumber) {
     
        for (let i = 0; i < cardNumber.length; i++) {
          let len = cardNumber.length;
          if (len === 14 && (cardNumber.startsWith('38') || cardNumber.startsWith('39'))) {
            return 'Diner' + "'" +'s ' + 'Club';
          } else if (len === 15 && cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
            return "American Express";
          } else if ( cardNumber.startsWith('4') && (len === 13 || len === 16 || len === 19) ) {
            return "Visa";
          } else if ((cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54')
            || cardNumber.startsWith('55')) && len === 16 ) {
            return "Mastercard";
          }
       }
    }
    detectNetwork('343456789012345')

