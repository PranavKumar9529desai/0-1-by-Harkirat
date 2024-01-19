{/*    a,b =7  ;  then we know that a==b ;

but in function , 
fun a(){                      
    console.log('hi');   
}
fun b(){
    console.log('hi')
}

a() === b() is not correct as it refers to differnet memory 


so need we need Usecallback() when use some callbacks funtions based on there refernce equality


Usecallback returns value 

UseMemo returns fun



const [count, SetCount] = useState(0);

   const Inc =useCallback (()=>{
    SetCount(count+1 );
    
  }, [count]);

  return (
    <>
      <button onClick={Inc}>Click ME </button>
      <br />
      <h2>this is without Memoized {count}</h2>
    </>
  );

*/}
