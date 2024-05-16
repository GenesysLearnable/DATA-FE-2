import React, { useState } from 'react'; 
import "./Components.css";

export const Inputs = ({ type, placeholder, names, inputStyles, inputIcon }) => {
  const [inputValue, setInputValue] = useState({ [names]: '' }); 

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value }); 
  }

  return (
    <div className='inputWrapper'>
      <input
        className={`${inputStyles}`}
        type={type}
        placeholder={placeholder}
        name={names}
        value={inputValue[names] || ""} 
        onChange={handleChange}
        required
      />
      <span className='inputIcon'>{inputIcon}</span>
    </div>
  );
}
