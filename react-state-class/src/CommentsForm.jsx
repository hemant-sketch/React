import { useState } from "react";
import './Comment.jsx';

export default function CommentsForm({addNewComment}) {
    let [formData, setFormData] = useState({
        userName : "",
        remarks : "",
        ratings : 5
    })

    let handleInputChange = (event)=> {
       setFormData ((currData) => {
            return {
                ...currData,
                [event.target.name] : event.target.value
            }
       })
    }

    let handleSubmit = (event)=>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            userName : "",
            remarks : "",
            ratings : 5
        })
        
    }

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">Username</label>
                <input placeholder="userName" 
                type="text" 
                value={formData.userName}
                onChange={handleInputChange}
                id="userName"
                name="userName"
                /><br/><br/>

                <label htmlFor="remarks">Remarks</label>
                <textarea 
                value={formData.remarks} 
                placeholder="add few remarks"
                onChange={handleInputChange}
                id="remarks"
                name="remarks"
                >Remarks</textarea><br/><br/>
                
                <label htmlFor="ratings">Ratings</label>
                <input placeholder="ratings" 
                type="number" 
                value={formData.ratings}
                min={1} max={5} 
                onChange={handleInputChange}
                id="ratings"
                name="ratings"
                /><br/><br/>

                <button>Add Comment</button>
            </form>
        </div>
    )
}