interface User  {
     username : string ,
    age : number ,
    lastname  : string 
}


interface user  {
    id : string
    username : string ,
   
}

const NewUser : Pick<User,"username"> = {
    username  : "Pranav"
}

const PartailUser  : Partial<User> ={
    username : "new name" ,
    lastname : "Desai"
}

interface user  {
    id : string
    username : string ,
   
}

type Userset = { [key : number]:user} ;

// const newUserSet : Userset = {
//     1 : { id : "1" , username : "pranav"},
//     2 : { id : "1" , username : "nilesh"},

// }


type RecordSet = Record<number,user> ;
const newUserSet : Userset = {
    1 : { id : "1" , username : "pranav"},
    2 : { id : "1" , username : "nilesh"},

}


const mapSet = new Map<string,user>();

// Add users to the map using .set
mapSet.set('abc123', { id: 'abc123', username: 'John Doe' });
mapSet.set('xyz789', { id: 'xyz789', username: 'Jane Doe' });

// Accessing a value using .get
// console.log(mapSet.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }


// console.log(newUserSet);


type NewEvent = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<NewEvent, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK