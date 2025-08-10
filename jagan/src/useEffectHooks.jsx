import { useEffect,useState } from "react";
import React from 'react';

function UseEffectHooks() {
    const [count, setCount] = useState(0);
    function addCount(){
        setCount(count+1);
    }
    useEffect(()=>{
        document.title=`Count : ${count}`;
    },[count]);
    function decCount(){
        setCount(count-1);
    }

    return(<>
    <div>

 <p>Count is : {count}</p>
 <button onClick={addCount}>Count INC</button>
 <button onClick={decCount}>DecCount</button>
    </div>

    </>)
}
export default UseEffectHooks;