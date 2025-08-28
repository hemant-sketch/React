import { useState } from "react"

export default function Form() {
    let [fullName, setFullName] = useState("Hemant");

    let handleNameChange = (event) => {
        console.log(event.target.value);
        setFullName(event.target.value);
    }

    return (
        <form>
            <input placeholder="Enter your full name" type="text" value={fullName} onChange={handleNameChange}/>
            <button>Submit</button>
        </form>
    )
}