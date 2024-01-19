import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card } from './component/Card'
import './App.css'

function App() {
  return <>
    <Card 
    name='pranav' 
    description='I am full stack developer' 
    Interets={[ "Coding" , "OpenSource" , "Scifi movies"]} />
    </>
  
}

export default App
