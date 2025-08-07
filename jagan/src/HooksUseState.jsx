import React, { useState } from 'react';

const HooksUseState = () => {
     const [name,setName]=useState("Evado theliyadu");
    const [age,setAge]=useState(20);
    const setNameHandler=() =>{
                setName("Jagan");

            }

    const ageInc=()=>{
        setAge(age+5);
    }
    const ageIncbyTwo=()=>{
        setAge(age+2);
    }
    return(
        <div>
           <p>Your name is : {name}</p>
           <button onClick={setNameHandler}>Click to set name</button>
           <p>Hi your age : {age}</p>
           <button onClick={ageInc}>Increment age</button>

        </div>
    );
}
export default HooksUseState;

