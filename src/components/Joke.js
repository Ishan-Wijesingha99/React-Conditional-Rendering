
import React from "react";



export const Joke = function(props) {
    const [isShown, setIsShown] = React.useState(false)

    const toggleShown = function(jokeId) {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            <h3>{props.setup}</h3>

            {isShown && <p>{props.punchline}</p>}

            <button 
            onClick={toggleShown}
            >
                {isShown ? 'Hide' : 'Show'} Punchline
            </button>

            <hr />
        </div>
    )
}