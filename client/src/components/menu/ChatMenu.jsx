import React, { useState } from "react";
import { AiOutlineFileText, AiOutlineSmile, AiOutlineStar, AiOutlineUserAdd } from "react-icons/ai";
import { getOtherUserInfo } from "../../api/logic/getters";
import Message from "../message/Message";
import "./chatmenu.css";

export default function ChatMenu({ sendMessage, selectedChannel, setSelectedChannel, currentUser, isPrivate }) {

    // const [messages, setMessages] = useState(selectedChannel.messages);

    async function sendText(){
        const text = document.querySelector("#message-area").value;
        
        if(text !== ""){
            const currentDate = new Date();
            const timestamp = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
            
            sendMessage(selectedChannel.name, currentUser.name, text);

            document.querySelector("#message-area").value = "";
            setSelectedChannel(selectedChannel => {
                const copyChannel = Object.assign({}, selectedChannel);
                copyChannel.messages = [...[{text: text, senderId: currentUser.id, timestamp:timestamp}], ...copyChannel.messages];
                return copyChannel;    
            });
            // try {
            //     await connection.invoke("SendToRoom", selectedChannel.name, text);
            // } catch (err) {
            //     console.error(err);
            // }
        }
    }

    async function receiveMessage(message){
        console.log(message);
    }

    return(
        <div className="chat-menu">
            <header>
                <h1>{ isPrivate ? getOtherUserInfo(selectedChannel, currentUser.id).name : selectedChannel.name}</h1>
            </header>
            <div className="chat-field">
                <div className="messages">
                        {/* {selectedChannel.messages.map((message) => {
                            return (
                                <Message key={Math.random()*100} message={message} currentUser={currentUser} />
                            )
                        })} */}
                </div>
                <div className="messenger">
                    <textarea name="message" id="message-area" cols="30" rows="1" placeholder="Type your message"></textarea>
                    <div className="message-panel">
                        <div className="message-tools">
                            <AiOutlineFileText size={20} color="#6A7681"></AiOutlineFileText>
                            <AiOutlineUserAdd size={20} color="#6A7681"></AiOutlineUserAdd>
                            <AiOutlineSmile size={20} color="#6A7681"></AiOutlineSmile>
                        </div>
                        <button onClick={sendText}>Send</button>
                    </div>
                </div>
            </div>
            
        </div>
   )
}