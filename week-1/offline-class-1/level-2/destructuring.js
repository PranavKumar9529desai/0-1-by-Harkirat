let person = {

    id : 1 , 
    details : {FirstName  : 'Pranavuamr' ,
    LastName  : 'Desai' ,
    Age : 20 , 
}
    
}

// array destruting 
let arr = ['pranav' , 'Mukund' , 'kuamr ' , 'Desai' , 'didi' , 'father' , 'aei'] ;
let [ d ,b , ...c] = arr ;
// console.log(c);
// spread opertor must be used as last element oteriwse you get errro
// console.log(d,b,c);

let { FirstName : f , LastName : l  , Age : a} = person ; 
// we inialize the firstname , lastaname , age  with the with respective values in persons 
// we can give the allias to the firstname as f then we can use f and so on 


// while destructring the objects you use th same Names mentioned in the objects .
let {id, details : {
     FirstName , LastName , Age
}} =  person ; 

// console.log(id) ;
// console.log(FirstName);
// console.log(LastName) ;
// console.log(Age);

// usefull things in React 

// const displayFullName = (person) => `${person.fname} ${person.lname}` ;
// In JavaScript, functions are first-class citizens. This means they can be assigned to variables, stored in data structures, passed as arguments to other functions, and returned as values from other functions.
person = {
    fname : 'pranav' ,
    lname : 'Desai' 
}

let displayFullName = ({fname , lname})=>`${fname} ${lname}`;



console.log(displayFullName(person));

