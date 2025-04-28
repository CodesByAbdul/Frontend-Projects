import React from 'react'

const Button = () => {
  
  const handleClick = (e) => {
    e.target.textContent = "WOW, IT CHANGED"
    console.log(e)
  }
  
  return (<button onClick={(e) => handleClick(e)}>Click me </button>)
}

export default Button