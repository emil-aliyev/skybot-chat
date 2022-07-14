import React from "react";
import "./message.css";

export default function Message( {message, currentUser} ) {

    return (
        <div className="message" data-sent={(message.senderId === currentUser.id).toString()}>
            <p className="message-text" data-sent={(message.senderId === currentUser.id).toString()}>{message.text}</p>
            <p className="message-info">{message.senderId} * {message.timestamp}</p>
        </div>
        
    )
}