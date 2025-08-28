function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form has been submited");
}

export default function Form() {
    return (
        <form>
            <input placeholder="write something"></input><br/>
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}