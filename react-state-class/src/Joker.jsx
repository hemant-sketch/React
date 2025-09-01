import {useState , useEffect} from "react";
const URL = "http://official-joke-api.appspot.com/random_joke";


export default function Joker() {
    const URL = "http://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async ()=>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup : jsonResponse.setup, punchline : jsonResponse.punchline})
    }

    useEffect(()=> {async function getFirstJoke(){
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup : jsonResponse.setup, punchline : jsonResponse.punchline})
    }
    getFirstJoke();
    },
    []
)

    let [joke, setJoke] = useState(getNewJoke);

    return (
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>Get Joke</button>
        </div>
        
    )
}