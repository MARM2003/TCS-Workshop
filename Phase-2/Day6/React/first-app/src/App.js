import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  // function incre(){
  //   setCount(count+1);
  // }
  // function decre(){
  //   setCount(count-1);
  // }
  if(count<0){
    setCount(0)
  }else if(count>50){
    setCount(0)
  }
  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
        <button onClick={()=>setCount(count-1)}>-1</button>
        <button onClick={()=>setCount(count+5)}>+5</button>
        <button onClick={()=>setCount(count-5)}>-5</button>
        

    </div>
  );
}

export default App;
