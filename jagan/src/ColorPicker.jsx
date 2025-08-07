import React, { useState } from 'react';

function ColourPicker() {
  const [color, setColor] = useState('#FFFFFF');

  function handleColorOnchange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <h1>Color Picker</h1>
      <div style={{ backgroundColor: color, padding: "10px", marginBottom: "10px" }}>
        <p>Selected color is {color}</p>
      </div>
      <label>Select a color:</label>
      <input type="color" value={color} onChange={handleColorOnchange} />
    </>
  );
}

export default ColourPicker;
