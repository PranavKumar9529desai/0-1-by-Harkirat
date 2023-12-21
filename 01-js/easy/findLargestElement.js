/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let num = -999;
    if(numbers.length==0) return undefined;
    for(let i = 0 ; i< numbers.length; i++){
        if(num < numbers[i]) {
           num=numbers[i];
        }
    }
    
return num;
}


// findLargestElement([1,2,3,4]);
module.exports = findLargestElement;