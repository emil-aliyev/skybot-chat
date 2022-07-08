import React from "react";
import "./chatmenu.css"

export default function ChatMenu({ selectedChannel }) {
    return(
        <div className="chat-menu">
            <header>
                <h1>{selectedChannel.name}</h1>
            </header>
            {/* <div className="messages">
                
            </div>
            <div className="chat-field">
                <textarea name="text-a" id="" cols="30" rows="10"></textarea>
            </div>
            <input type="text" /> */}
            <div className="messenger">
                <input type="text" placeholder="Type your message"/>
            </div>
        </div>
   )
}