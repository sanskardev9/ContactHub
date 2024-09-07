import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import './VerticalNavbar.css'

const VerticalNavbar = () => {
  return (
    <div className='vertical-nav'>
      <Navbar/>
      <Form/>
    </div>
  )
}

export default VerticalNavbar