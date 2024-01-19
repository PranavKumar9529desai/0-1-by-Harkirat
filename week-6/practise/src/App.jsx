import { useState, memo, useMemo, useCallback, useEffect, useRef , } from "react";

function App() {
   const divref = useRef();
   
   useEffect(()=>{
    setTimeout(() => {
       divref.current.innerHTML = "10000";
    }, 5000);
   },[]);

   const bank_balence = 5000;

   return <>
   <h1>My banks balence is :</h1>
   <h2 ref={divref}>{bank_balence}</h2>
   </>
}

export default App;