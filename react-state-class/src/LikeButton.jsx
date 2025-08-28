import { useState } from "react";

export default function LikeButton() {
    // function handleClick() {
    //     console.log("You liked!");
        
    // }

    let [isLiked, setIsLiked] = useState(false);
    let [click, setClick] = useState(0);

    let likeStyle = {color : "red"};

    let toggleLike = ()=> {
        setIsLiked(!isLiked); 
        setClick(++click);
    }

    let handleClick = ()=> {
        console.log("You Liked!");
    }

    return (
        <div>
            <p>Number of clicks = {click} </p>
            <p onClick={toggleLike}>
                {/* {isLiked.toString()} */}
                {
                  isLiked ? <i className="fa-solid fa-heart"  style={likeStyle}></i>
                   : <i className ="fa-regular fa-heart"></i>
                }
            </p>
        </div>
    )
}

