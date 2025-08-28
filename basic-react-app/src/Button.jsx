function handleClick() {
    console.log("Hello!");
}

function handleMouseOver() {
    console.log("Bye!");
}

function handleDoubleClick() {
    console.log("You double clicked!");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onClick={printBye}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Nobis enim repudiandae quos similique aperiam, veritatis molestias dicta, 
                excepturi ipsa omnis repellendus vitae optio maiores voluptatibus ullam suscipit, 
                sint laudantium tempore?
            </p>
            <p onMouseOver={handleMouseOver} onClick={handleClick}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Nobis enim repudiandae quos similique aperiam, veritatis molestias dicta, 
                excepturi ipsa omnis repellendus vitae optio maiores voluptatibus ullam suscipit, 
                sint laudantium tempore?
            </p>
            <button onDoubleClick={handleDoubleClick}>Click twice!</button>
        </div>
    )
}