import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p> This page is awesome</p>
      <Link to='/about'>go to about page</Link>
    </div>
  )
}

export default Home
