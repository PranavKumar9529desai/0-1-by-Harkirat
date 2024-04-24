import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' ;
import axios from 'axios' ;
import { RecoilRoot, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { FinalNotificationSelector, notificationAtomState } from './atoms/linkdein'

function App() {

  return (
    <>
    <RecoilRoot>
       <MainApp />
       
</RecoilRoot>
    
    </>
  )
}


function MainApp(){
  const [TopbarState , setTopbarState ]   = useRecoilState(notificationAtomState) ;
  const FinalCount2  =  useRecoilValue(FinalNotificationSelector);
  
   return <>
    <button>Home</button>
    <button>Network ({TopbarState.network >=99 ? "99+" : TopbarState.network})</button>
    <button>Message ({TopbarState.messaging})</button>
    <button>Notification ({TopbarState.notifications})</button>
    <button>Jobs ({TopbarState.jobs})</button>
    <button>Me ({FinalCount2})</button>
    </>
}





export default App
