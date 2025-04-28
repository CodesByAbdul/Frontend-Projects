import React from 'react'

const Card= (props) => {
  const clickFunction = (e) => e.target.style.display = "none"
  return (
    <div className='card' onClick = {(e) => {clickFunction(e)}} >
      <img className='image' src="./vite.svg" alt="vite logo" />
      <h2 className='name'>{props.name}</h2>
      <p className='description'>{props.desc}</p>
    </div>
  )
}

export default Card