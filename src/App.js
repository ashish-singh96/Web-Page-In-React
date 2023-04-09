import React, { useState } from 'react';
import './App.css';
import Child from './component/Child';
const App = () => {
   const[parent,setparent]=useState("Ashish");

  return (
    <div>
    <h1>parent:{parent}</h1>
      <Child parent={parent}  setparent={setparent}/>
    </div>
  )
}

export default App

