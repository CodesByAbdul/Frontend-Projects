// ColorPicker.jsx
// This component will allow the user to pick a color from a color palette
import React, {useState} from 'react';

const ColorPicker = () => {

  const [color, setColor] = useState('#ffffff');

  const handleColorPick = (event) => {
    setColor(event.target.value);
  }
  return (
    <div>
      <h1>Color picker</h1>
      <div className='color-display' style={{backgroundColor: color}}>
        <p>color: {color}</p>
      </div>
      <label htmlFor="">Pick a color: </label>
      <input type="color" onChange={handleColorPick} value={color}/>
    </div>
  )
}

export default ColorPicker