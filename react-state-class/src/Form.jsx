import { useState } from "react"

export default function Form() {
    // let [fullName, setFullName] = useState("");
    // let [userName, setUserName] = useState("");

    // let handleNameChange = (event) => {
    //     console.log(event.target.value);
    //     setFullName(event.target.value);
    // }
    
    // let handleUserName = (event) => {
    //     console.log(event.target.value);
    //     setUserName(event.target.value);
    // }

    let [formData, setFormData] = useState({
        fullName : "",
        userName : "",
        passwrod : "",
    })

    let handleInputChange = (event) => {
        let fieldName = event.target.name;  // jo cheez change hori uska variable
        let newValue = event.target.value;  
        // console.log(newValue);
        
        setFormData((currData) => {
            return { ...currData, [fieldName] : newValue};  // react mein variable to likhne ka tareek with a []
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName : "",
            userName : "",
            password : "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input 
            placeholder="Enter your full name" 
            type="text" 
            value={formData.fullName} 
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            /><br/>
            <br/>
            <label htmlFor="username">User Name</label>
            <input 
            placeholder="Enter your user name" 
            type="text" 
            value={formData.userName} 
            onChange={handleInputChange}
            id="userName"
            name="userName"
            /><br/>
            <br/>
            <label htmlFor="password">Password</label>
            <input 
            placeholder="Enter your password" 
            type="password" 
            value={formData.password} 
            onChange={handleInputChange}
            id="password"
            name="password"
            />
            <button>Submit</button>
        </form>
    )
}