import React from "react";
import "./message.css";

import UserIcon from "../userIcon/UserIcon";

export default function Message( {message, currentUser} ) {

    // console.log("FROM: ", message);

    return (
        <div className="message" data-sent={(message.fromUser.id === currentUser.user.id).toString()}>
            <UserIcon userName={message.fromUser.fullName}/>
            <p className="message-text" data-sent={(message.fromUser.id === currentUser.user.id).toString()}>{message.content}</p>
            {/* <p className="message-info">{message.senderId} * {message.timestamp}</p> */}
        </div>
        
    )
}