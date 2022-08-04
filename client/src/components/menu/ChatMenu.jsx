import React, { useEffect, useState } from "react";
import { AiOutlineFileText, AiOutlineSmile, AiOutlineStar, AiOutlineUserAdd } from "react-icons/ai";
import Message from "../message/Message";
import "./chatmenu.css";

const sendMessageEvent = new SignalrEvents('SendToRoom', 'RecieveMessage');

export default function ChatMenu({ sendMessage, selectedChannel, setSelectedChannel, currentUser, isPrivate }) {

    // const [messages, setMessages] = useState(selectedChannel.messages);

    async function sendText(){
        const text = document.querySelector("#message-area").value;
        if(text !== ""){
            try{
                sendMessage(selectedChannel.name, currentUser.user.fullName, text);
            } catch(err) {
                console.log(err);
            }
            document.querySelector("#message-area").value = "";
            // setSelectedChannel(selectedChannel => {
            //     const copyChannel = Object.assign({}, selectedChannel);
            //     if (copyChannel.messages !== null){
            //         copyChannel.messages = [...[{text: text, senderId: currentUser.user.id, senderName: currentUser.user.fullName, timestamp:timestamp}], ...copyChannel.messages];
            //     } else {
            //         copyChannel.messages = [{text: text, senderId: currentUser.user.id, senderName: currentUser.user.fullName, timestamp:timestamp}]   
            //     }
            //     return copyChannel;    
            // });
        }
    }

    // async function receiveMessage(message){
    //     console.log(message);

    //     setSelectedChannel(selectedChannel => {
    //         const copyChannel = Object.assign({}, selectedChannel);
    //         copyChannel.messages = [...[{text: message.content, senderId: message.fromId, senderName:message.from, timestamp:message.timestamp}], ...copyChannel.messages];
    //     })
    // }

    return(
        <div className="chat-menu">
            <header>
                <h1>{ isPrivate ? getOtherUserInfo(selectedChannel, currentUser.id).name : selectedChannel.name}</h1>
            </header>
            <div className="chat-field">
                <div className="messages">
                    {selectedChannel.messages !== null && 
                    selectedChannel.messages.map((message) => {
                        return (
                            <Message key={message.id * Math.random()*1000} message={message} currentUser={currentUser}/>
                        )})
                    }
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