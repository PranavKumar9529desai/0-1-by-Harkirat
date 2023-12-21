/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0



    */

const { error } = require("console");


 
class Calculator {
  constructor() {
    this.result = 0;
  }
  add(value) {
    this.result += value;
  }
  subtract(value) {
    this.result -= value;
  }
  multiply(value) {
    this.result *= value;
  }
  divide(value) {
    if (value === 0) {
      throw new Error;
    }
    else {
    this.result = (this.result / value);
    }
  }
  clear(value) {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }


  calculate(expression){
    let value = eval(expression);
    if(!isFinite(value)) throw new error;
    this.result=value;
    
  }
}


    module.exports = Calculator;
//   Once you've implemented the logic, test your code by running
// */

// class Calculator {
//   constructor(){
//     let result;
//     function add(a,b){
//        result = a+b;
//     }
//     function sub(a,b){
//       result=a-b;
//     }

//     function mul(a,b){
//       result=a*b;
//     }
//     function div(a,b){
//       result=a/b;
//     }
//     function getResult(){
//       return result;
//     }
//   }
// }





module.exports = Calculator;
