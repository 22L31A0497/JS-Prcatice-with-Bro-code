
import React, { useState } from 'react';

function MyCompontent() {

    const [food,setFood]=useState(["Pizza", "Burger", "Pasta"]);
    return(
        <div>
           <h1>Food items list</h1>
           <ul>
            {food.map((food,index)=> <li key={index}>{food}</li>)}
           </ul>
        </div>
    )

}
export default MyCompontent;