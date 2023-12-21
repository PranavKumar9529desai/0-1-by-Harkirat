/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    let arr = [];

    this.add = function(task) {
      arr.push(task);
    };

    this.remove = function(indexOfTodo){
      
       if(indexOfTodo < 0 || indexOfTodo > arr.length-1) return null;
      //  arr.splice(staring_index,Number_of_element_from_the_index_you_want_delete);
       return arr.splice(indexOfTodo,1);  
    };

    this.update = function(indexOfTodo, task){
      if(indexOfTodo < 0 || indexOfTodo > arr.length-1) return null;
      arr[indexOfTodo] = task;
    };

    this.getAll = function(){
      return arr;
    };
    
    this.get = function(indexOfTodo){
      if(indexOfTodo < 0 || indexOfTodo > arr.length-1) return null;
      return arr[indexOfTodo];
    };
     
    this.clear = function(){
      arr = [];
    };
  }
   
}

module.exports = Todo;
