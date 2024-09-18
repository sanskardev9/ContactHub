import React from 'react'
import './Button.css'

const Button = ({name, onClick}) => {
  return (
    <button type='submit' onClick={onClick}>{name}</button>
  )
}

export default Button 