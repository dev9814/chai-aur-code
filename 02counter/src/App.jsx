import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15);

  const addValue = () =>{
    if(counter<20){
      setCounter(counter+1);
    }
    
    console.log(counter);
  }

  const minusValue = () => {
    if(counter>0){
      setCounter(counter-1);
    }
    
    console.log(counter);
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h3>Counter Value: {counter}</h3>
      <button
      onClick={addValue}>
        Increase Value</button>
      <button
      onClick={minusValue}>
        Decrease Value</button>
    </>
  )
}

export default App
