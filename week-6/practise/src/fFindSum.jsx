import { useState , useMemo } from "react";

function Sum(){
    const [input , setInput] = useState() ;
    const [sum , setSum] = useState() ; 
    const [Count , SetCount] = useState() ;
    let count = 0 ;
    function incCount(){
       count = count + 1 ;
       SetCount(count);
    }
   
    return<>
      <input type="text" placeholder="Enter the number"/>
      <button onClick={incCount}>{Count}</button>
     </>
}