import React from 'react'

const Navbar = (props) => {
         const {data}=props;
  return (
    <div>
      <h1>Child Component</h1>
      <h1>{data.name}</h1>
    </div>
  )
}

export default Navbar
