import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15)

 // let counter=19
    let addValue=()=>{
   //counter=counter+1 
   if (counter<20)
//setcounter(preCounter => preCounter+1 )
   setcounter(counter+1 )

   //setcounter(counter+1  )
   //setcounter(counter+1  )
  // setcounter(counter+1  )
   //setcounter(counter+1  )


   // this is work done according to batch ,all below line make a batch
   //qsetcounter(preCounter => preCounter+1 )
   //qsetcounter(preCounter => preCounter+1 )
   //qsetcounter(preCounter => preCounter+1 )
   //qsetcounter(preCounter => preCounter+1 )
  
  }

  let removeValue =()=>{
    if(counter>0)
    setcounter (counter -1)
    
  }

  return (
    <>
      <h1>COUNTER</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}  >
        Add values </button>
      <br />
      <br />
      <button onClick={removeValue}> Remove value</button>
      
    </>
  )
}

export default App
