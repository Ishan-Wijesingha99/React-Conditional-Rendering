
import React from "react";
import { jokesData } from "../jokesData";
import { Joke } from "./Joke";



export const App = function() {
    
    const jokeElements = jokesData.map(element => {
       return (
        <Joke 
        key={element.id}
        setup={element.setup}
        punchline={element.punchline}
        jokeId={element.id}
        />
       )
    })

    return (
        <div>
            {jokeElements}
        </div>
    )
}