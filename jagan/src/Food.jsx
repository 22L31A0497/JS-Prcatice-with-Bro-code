import React from 'react'

const Food = () => {

    const food1="Bannana";
    const food2="Carrot";

  return (
    <ul>
        <li>Apple</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
    </ul> 
  )
}

export default Food;
