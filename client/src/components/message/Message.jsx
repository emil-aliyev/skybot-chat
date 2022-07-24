import React from "react";
import "./message.css";

import UserIcon from "../userIcon/UserIcon";
import { getUserInfo } from "../../api/logic/getters";

export default function Message( {message, currentUser} ) {

    return (
        <div className="message" data-sent={(message.senderId === currentUser.id).toString()}>
            <UserIcon userName={getUserInfo(message.senderId).name}/>
            <p className="message-text" data-sent={(message.senderId === currentUser.id).toString()}>{message.text}</p>
            {/* <p className="message-info">{message.senderId} * {message.timestamp}</p> */}
        </div>
        
    )
}