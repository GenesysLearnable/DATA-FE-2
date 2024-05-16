import React from 'react'
import "./Components.css"

export const Button = ({value, customStyle}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // my submit logic
  }

  return (
    <button 
      className={`buttonStyle ${customStyle}`}
      onClick={handleSubmit} 
      type='submit'>
      {value}
    </button>
  )
}
