/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0 ;
  let Myvar = str.toLowerCase();
  for(let i =0 ; i< Myvar.length ; i++){
    if(Myvar[i]==='a'||Myvar[i]==='e'||Myvar[i]==='i'||Myvar[i]==='o'||Myvar[i]==='u'){
         count = count +1 ;
    }
    
  }
  // console.log(Myvar);
    // Your code here
    return count;
}

// countVowels("pranav");
module.exports = countVowels;