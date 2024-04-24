import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from './components//ProfileCard/profile' ;
import { BackgroundChanger } from './components/background/BackgroundColor' ;
import { ParagraphGenerator } from './components/background/Paragraphgenrator/Paragraph';
import { Frontend } from './components/background/Paragraphgenrator/frontend';
function App() {
  return <>
   <Frontend />
     </>
  
    
}
  

export default App


//  return {/*( 
    
  //    Quesion Number One 
       
  //     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center
  //  '  >
  //     <Profile />
  //     <Profile />
  //     <Profile />
  //   </div>)
  //  */ }