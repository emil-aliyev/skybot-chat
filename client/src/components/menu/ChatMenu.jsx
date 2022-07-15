import React from "react";
import { AiOutlineFileText, AiOutlineSmile, AiOutlineStar, AiOutlineUserAdd } from "react-icons/ai";
import Message from "../message/Message";
import "./chatmenu.css";


export default function ChatMenu({ selectedChannel, currentUser }) {
    return(
        <div className="chat-menu">
            <header>
                <h1>{selectedChannel.name}</h1>
            </header>
            <div className="chat-field">
                <div className="messages">
                        {selectedChannel.messages.map((message) => {
                            return (
                                <Message  key={Math.random()*100} message={message} currentUser={currentUser} />
                            )
                        })}
                </div>
                <div className="messenger">
                    <textarea name="message" id="" cols="30" rows="1" placeholder="Type your message"></textarea>
                    <div className="message-panel">
                        <div className="message-tools">
                            <AiOutlineFileText size={20} color="#6A7681"></AiOutlineFileText>
                            <AiOutlineUserAdd size={20} color="#6A7681"></AiOutlineUserAdd>
                            <AiOutlineSmile size={20} color="#6A7681"></AiOutlineSmile>
                        </div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
            
        </div>
   )
}