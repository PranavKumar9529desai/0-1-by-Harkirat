-----------------------------TypeScript ------------------------------

Typescript is mainted by Microsoft it is superset of js.
  --->it has strict typing and various other features on top of the js.


so the big question as we know the broswer doesn't understands the typescript neither the node js understands the typescript then how does typescript compilation works .

here what happens

   typescript code get compile down to jsfile by using the command called as "TSC"
what it does is if the code has the any compile time eroor it doesn't create the jsfile.

their other compliar which can do the same job such as esbuild,swc

-----------------------commands to install to the typescript ------------------

npm i -g typescript
mkdir node-app 
cd node-app
npm tsc init -y     //this command creates the tsx configuration file which is responsible for how the tsx file get compile down to the js file 

to compile use tsc -b or tsc filename 

--------------------------------TsConfig ---------------------------------
don't push dist to github a add dist .gitignore

In summary, tsc filename is used to compile a single file, while tsc -b is used to build a whole project along with its dependencies.



-----------------------------function arguments---------------------------

function Greetings(string name){
    console.log("hello world "+name+" welcome to typescript");
}

Greetings("pranav");


-----------------------------implicit vs explict types ----------------------------

// implict example 

let name = "PRANAV" ;
--> having the ts guess which type of value it is called "infer";


// explicit expample
let name : string = "Pranav" 


------------------------------any type--------------------------------------


let nature : any = true ; 
nature = 80;
console.log(nature);



------------------------- unknown type----------------------------------------

it much safer alternative to the "any" type .


if trid the same code used in any but now it gives error as 

<!-- Type 'unknown' is not assignable to type 'number'.ts(2322) -->


let age : number = Name ;
let Name : unknown = "Pranav" ;
Name = 90 ;

let age : number = Name ;                  //   <!-- Type 'unknown' is not assignable to type 'number'.ts(2322) -->


it is the reason we use the unknwon more  


let Name : unknown = "Pranav" ;
Name = 90 ;
// Name = true ;
if(typeof Name== 'number'){
    let age : number = Name ;

}
console.log(Name);

unknwon type you can change value of var to any type but you assign values to the another variable when you checked for the type 



--------------------------udefinded and null-----------------------------------------

both represent js primitive datatypes such as the undefined and null .

------------------------- never ------------------------------------------------------

gives error everytime it is used 
never is rarely used, especially by itself, its primary use is in advanced generics.






------------------------------------------------------------------------------------------------

2) Array 

let numbers : number[] = [1 , 2  ,3]
numbers.push(5);
console.log(numbers);

let names : readonly string[] = ["pranv" , "mukund" , "didi"] ;
names.push('new') ;        // gives error as can't modify the readonly array  
console.log(names);


let lasnames = ["desai" , "lagad" , "jaina"] ;         
// inference the array as the ts is guessing the type implicitely 


### 2)Tuple : 
   tuple are typed array simiar (structure in C++) as it can hold any datatype.

let tuple : [boolean , number , string] = [true , 40 , "pranav"] ;


# named tuples 
let tuple1 : [x:number , y:number] = [1,2];
console.log(tuple1);

# readonly tuples 
let tuple3 : readonly [boolean,number,string] = [false,78,"desai"]; 



### 3)Objects


let obj : {Name:string ,age:number,lastName:string} = {
    Name : "pranav" ,
    age : 89 ,
    lastName : "desai",
}

obj.Name = "newName";
// inference 
let obj2 = {
    name : "lagad",
    age : 50 ,
}
console.log(obj2);
console.log(obj);





const car : {type : string , mileage : number} = {
    type : "spots car"
    // throws error as mileage is not defined 
}


const car2: {type : string , mileage? : number} = {
    type : "spots car"
}

// using optional property 



### 4)Enums : 
  enums are the special class that represent a group of constants unchangeble variables.
it comes in 2 flavours string and the array 

enum friends {
    "ram",
    "sham",
    "pranav",
    "dada",
    "didi"
}

let myName = friends[2];
console.log(myName);


friends[2] = "nilesh" ;          
// can't assign new value to the enums 



## numeric enums :
  enum friends {
    "ram" = 4,
    "sham",
    "pranav",
    "dada",
    "didi"
}

index will start from the 4 ;

console.log(friends);


### 5) Type Alliases : 
TypeScript allows types to be defined separately from the variables that use them.
Aliases and Interfaces allows types to be easily shared between different variables/objects.


    alliases allows to write custome type as we can use them later whenever we need.  
    type firstname = string ; 
type age = number ;                   //defining a custom type with named as "age"
type lastname = string ;             

type studenet = {
   id :firstname , 
   birth : age ,
   proof :  lastname
}

let studentname : firstname = "nilesh" ;
let studentlastname : lastname = "lagad" ;
let studentage : age = 19 ;

let Student = {
    name : studentname ,
    age : studentage ,
    lastname : studentlastname
}
console.log(Student);

# 6) Interfaces :
      interfaces does the same thing as the type alias but it only works for the objects types 

interface Rectangle {
    length : number ,
    width : number ,
}

const rectangle : Rectangle = {
    length : 20 ,
    width : 30 ,
}

## extends Interface 
   all the properties of previous interface plus new properties 

interface ColouredRectangle extends Rectangle {
   color : string
}
const newRectangle : ColouredRectangle = {
    length : 80,
    width : 80,
    color : "blue" 
}

console.log(newRectangle);

### popular interview question , what is differnec between types and interface ?
----> types let's implement union and intersection  
----> the intefaces can implemented as classes and types can not .

# 6)Union types :
   union types are used whene value has more than one type 

function PrintStatus(code : number | string) {
    console.log(typeof(code));                      // status code is number
    console.log(`status code is ${code}`);          // status code is string
}

PrintStatus(404);
PrintStatus('404');


# Intersection  : 
   interface Student {
    name: string ,
    id : number ,
}

interface Coder{
     typeSpeed : number ,
     hasLaptop : boolean ,
}

type StudentCoder = Student & Coder  ;

let stcoder1 : StudentCoder = {
    name : "pranav" ,
    typeSpeed : 90,
    id : 89,
    hasLaptop : true 
}




# 7)Functions : 

function gettime() : number {
    // here the number return type  is given to the function 
    return new Date().getTime();
}

console.log(gettime());

function print() : void{
    // return type is void 
    console.log("Hello");
}

function PrintNum(a : number , b : number){
    // if types of the patameters are not defiend then they default infer to the any type 
    console.log(a,b);
}

## optional parameter :
function PrintNum2(a:number,b:number,c?:number){
    return (a * b ) * (c||0) ;
}

## default paranmeter
function PrintSum(a:number,b:number,c:number = 10 ){
       console.log(a,b,c);
} 

function PrintSum(a:number,b:number,c:number = 10 ){
    // console.log(a,b,c);
    return (a*b*c);
} 

console.log(PrintSum(1,2,3));                // result is 6
console.log(PrintSum(1,2));                  // result is 20 

### Rest parameters 
parameters after a & b are put down into the rest parameter

function Multiply(a : number , b : number , ...rest : number[]) : number{

    return a*b*rest.reduce((acc,curval)=>acc*curval);
}

console.log(Multiply(10,10,10,10,10));


### Type allias for the for function
here using the Print allias as type for the printNum 

type Print  = (num : number) => number;

const printNum : Print = (num)=>
          num*num ;

console.log(printNum(100));


# 8)Casting 
   casting is method to override the types .

   ### casting using as keyword :

let x : unknown = "pranv desai" ;
console.log((x as string).length);
--->converting the type of x from unknown to 

let y : unknown = 4 ;
console.log((y as string).length);

 ###  String to numbers and numbers to string 

we can't convert string to numbers and numbers to string directly as it will throw error instead first need to convert it into the uknown first then to string/numbers 

console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.


## Casting <>
  let x : unknown = "new" ;
  console.log(<string>x);


## Force casting 

as we can't convert the number into and vice versa so we first conver str/num to unknown and then to type to another.

 let x = 'hello';
 console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined



# Classes 

 class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";

class Data{
    private readonly name : string ;
    
    // setter function 
    public constructor(name : string){
        this.name=name;
    }
    // printer function     
    public getName(){
        return this.name;
    }
}
// constructor will be automatically called at the time of obj creation.
const person = new Data("Pranav");
const person2 = new Data("Nilesh");
console.log(person.getName());
console.log(person2.getName());

## inheritance implements :

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

# Utility Types :
   Typescript types provide some covenient ways to change/tranform one type into another 

## partials : 
   partials make all the types optinal.

    interface Student{
    name : String ,
    age : number ,
    stuid : number ,
}
let st1 : Partial<Student> = {
    name : "pranv" ,
}
console.log(st1);

## Required : 
   required makes all types must required .

   interface Student{
    name : String ,
    age : number ,
    stuid : number ,
}

let st1 : Required<Student> = {
    name : "pranv" ,               // throw error as msissing age type .
}

console.log(st1);

## Record : 
  Record is shortcut for creating object types.

  const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};

## omit 
 
 interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob' ,
    // `Omit` has removed age and location from the type and they can't be defined here
  };

## Pick : 

interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const person : Pick<Person,"name"> = {
    name : "pranav" ,         // can't not add other types pick removed all other types except "name"
  }


# NUll and undefined  : 

  let value: string | undefined | null = null;
console.log(typeof value);

value = 'hello';
console.log(typeof value);

value = undefined;
console.log(typeof value);

value=null;
console.log(typeof value);



# Optional Chainig 
  optional chaning allows to handle null/undefined memebers in objects that may or may not exists.

  interface House {
    sqrt : number ,
    yard?:{
        sqrt : number ;
    }   
}

function hasYard(house : House){
    const yardsize = house?.yard?.sqrt;
    if(yardsize==null||undefined){
        console.log("no yard");
    }
    else{
        console.log(`You have a Yard of ${yardsize}`);
    }
}

let house1 : House = {
    sqrt : 1000 ,
    yard : {
        sqrt : 1000
    }
}
hasYard(house1);


# callback functions in ts 
   





# Genrices : 
   genrcies similar like teplate class in c++ , it let's write code for different inputs.
 function Name <T>(arg: T){
    return arg;
}

console.log(Name<string>("name"));
console.log(Name<number>(20));
 

 # Record :
    it helps to write slghtly cleaner syntax for obj creation

    
type RecordSet = Record<number,user> ;
const newUserSet : Userset = {
    1 : { id : "1" , username : "pranav"},
    2 : { id : "1" , username : "nilesh"},

}



# Map : 
 
  map also does the same thing as the makes syntax more readible 

  interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }