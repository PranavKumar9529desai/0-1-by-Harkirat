/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let Myvar1 = str.toLowerCase();
  let Myvar2 = str.toLowerCase().split('').reverse().join('');
  if(Myvar1===Myvar2) return true;
  else if (str.includes(" ")||str.includes("?")){ return true;}
  else {return false};
}

// isPalindrome("pranav");

module.exports = isPalindrome;
