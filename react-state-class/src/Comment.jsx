import { useState } from "react";
import './Comment.css';
import CommentsForm from "./CommentsForm";

export default function Comment() {
    let [comments, setComments] = useState([{
        userName : "@hemant",
        remarks : "great job!",
        ratings : 5
    }])

    let addNewComment = (comment)=> {
        setComments((currComments) => [...currComments, comment]);
        console.log("Addded new component!");
        
    }

    return (
        <>
            <div>
                <h3>All comments</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>{comment.remarks}</span>
                        &nbsp; &nbsp; &nbsp;
                        <span>(rating = {comment.ratings})</span>
                        &nbsp; &nbsp; &nbsp;
                        <p>{comment.userName}</p>
                    </div>
                ))}
                
            </div>
            <hr></hr>
            <CommentsForm addNewComment={addNewComment}/>
        </>    
    ) 
}