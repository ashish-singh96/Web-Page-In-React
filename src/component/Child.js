import React, { useState } from 'react'

const Child = (props) => {
    const[childcomponent,setChildComponent]=useState(props.parent)
    
  return (
    <div>
       <h1>child: {childcomponent}</h1>
       <input type="text" value={childcomponent} onChange={(event)=>setChildComponent(event.target.value)} name="name"/>
       <button onClick={()=>props.setparent(childcomponent)}>Click me</button>
    </div>
  )
}

export default Child
