
import React from "react";



export const UnreadMessages = function() {

    const [messages, setMessages] = React.useState(['a', 'b'])

    

    return (
        <div>
            {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>}
        </div>
    )
}