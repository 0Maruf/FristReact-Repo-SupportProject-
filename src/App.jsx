import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero' 
import Support from './Component/Support' 
import Future from './Component/Future' 
import Next from './Component/Next' 
import Update from './Component/Update'
import Subscribtion from './Component/Subscribtion'





function App() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <Support/> 
     <Future/> 
     <Next/>
     <Update/>
     <Subscribtion/>
    </>
  )
}

export default App
