import { useContext, useEffect, useState } from "react";
import { CountContext } from "./components/context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, isEven } from "./components/stores/atoms/count";


function App(){
  // const [count ,setcount] = useState(0) ;
   return <>
    <RecoilRoot >
      <Count  /> 
      <Button  />
      <RenderType />
    </RecoilRoot>
   </>  

  useEffect(()=>{

  },)

function Count (){
  const count = useRecoilValue(countAtom);
  
  console.log(count);
  return <>
  <h2>{count}</h2>
  
  </>
}


function Button (){
  console.log("buttons are re rendered") ; 
  // const [count ,setcount] = useRecoilState(countAtom) ;
  const setcount = useSetRecoilState(countAtom);
  // we are using the useRecoilState
  return <>
    <button onClick={()=>{setcount(count=>count+1)}}>Inc</button>
    {/* here the setcount(count=>count+1) 
    is same as the fun(c){
       return c + 1 
    }
    takes previous count value whenver the setocunt is called and updates it*/}

    <button onClick={()=>{setcount(count=>count-1)}}>Dec</button>
    
  </>
}

function RenderType(){
   const count  = useRecoilValue(isEven);
   console.log(count);
   if(count==='zero') return <h2>Neither even nor odd </h2>
   if(count) return <h2>it is even number</h2>
   else return <h2>it is odd number</h2>
   
}

}

export default App ;