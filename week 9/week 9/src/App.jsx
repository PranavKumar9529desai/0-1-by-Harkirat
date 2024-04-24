import { useState ,useEffect } from "react";
import axios from 'axios';

function Usetodos(){
  const [Loading,setLoading] = useState(true);
  const [Todos,setTodos] = useState([]);

  useEffect(()=>{
      axios.get('https://sum-server.100xdevs.com/todos')
      .then((response)=>{
       console.log(response.data.todos);
       setTimeout(() => {
        setTodos(response.data.todos);
        setLoading(false);

       }, 5000);

      })
      .catch((error)=>{
       console.log(error);
       setLoading(false);
      });}
  ,[])
     
  // Return todos and loading state
  return {
    Todos: Todos,
    Loading: Loading
  };

}
 

  


export default function App(){
   const {Todos , Loading} = Usetodos();
   console.log(Todos,Loading);
  //  initializing the custome hook

  if (Loading) {
    return <div>Loading...</div>;
  }

  // Rendering Track component for each todo
  return (
    <>
      {Todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </>
  );
}



function Track({todo}){
  return <>
   <h2>{todo.title}</h2>
   <p>{todo.description}</p>
  </>
}
