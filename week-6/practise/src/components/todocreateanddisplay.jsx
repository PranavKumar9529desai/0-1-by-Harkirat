export function DisplayTodos() {

const [Id , setid] = useState(1);

  useEffect(()=>{
    console.log(Id);
  },[Id])

  function handleClick(e){
      const id = e.target.id ;
      setid(id);
  }

  return <>
  <button id="1" onClick={handleClick}>Button 1</button>
  <button id="2" onClick={handleClick}>Button 2</button>
  <button id="3" onClick={handleClick}>Button 3</button>
  <button id="4" onClick={handleClick}>Button 4</button>

    <Todo id={Id} /> 
   </>
}

function Todo ({id}){
  const [todo , setodos] = useState([]);

   useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=`+ id)
     .then((res)=>{
        console.log(res.data.todo);
        setodos(res.data.todo);
  })}
    ,[id])



  return<>
     <div key={todo.index}>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
     </div>
  </>

}