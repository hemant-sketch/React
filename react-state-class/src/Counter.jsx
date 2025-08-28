import { useState } from "react";
export default function Counter() {
    let [count, setCount] = useState(0);
    console.log(count); //rereder par har baar update hoga

    let increaseCounter = () => {
        setCount(count+1);
        console.log(count);  //rereder par nahi hoga update
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={increaseCounter}>Counts++</button>
        </div>
    )
}