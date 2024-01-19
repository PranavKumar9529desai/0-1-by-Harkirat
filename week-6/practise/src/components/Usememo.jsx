{/*we use UseMemo when we do expensive operations and we don't want to do the same expensive on every re render*

memo vs usememo are not 

as memo let't you skip the re rendering to the components props are unchaged 
*/}


// here the input value is the dependency of the App component will . the component wil only  re render only when 
// this dependenies changes means the expensive operation of preforming the sum will doesn't happen even though the app is re rendered 
// as the useMemo fun will meomize the fun by rembering the results of previous render.

// when  we inc the count in button that app will re render as state var is updated 
// so but as we are using the UseMemo the expensive computation will not take place ;







const [input , setInput] = useState() ;
const [Count , SetCount] = useState(0) ;


const sum= useMemo(()=>{
console.log('Memo got called ');
let count = 0 ;
for(let i =0 ; i<=input ; i++){
  count = count + i ;
  }
  return count ;
},[input]);


useEffect(() => {
console.log('Count changed, performing expensive operation...');
}, [sum]);


// let a = 0 ;


 return <div>
  hi there ? {a}
 </div>


  // return count ;



return<>
  <input type="text" placeholder="Enter the number" onChange={(e)=>{
    setInput(e.target.value);
  }} />
  <h2>sum from 1 to {input} is {sum}</h2>   
   <br></br>
  <button onClick={()=>{
    SetCount(Count + 1)
  }}>Count {Count}</button>
  <br />
  <Demo  a={Count} />
 </>