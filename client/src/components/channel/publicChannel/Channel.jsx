import React from "react";
import "./channel.css";
import toEmoji from "../../../api/logic/toEmoji";

export default function Channel({ currentUser, channel, selectedChannel, selected, setSelectedChannel, addToGroup }) {

    // console.log(`${channel.id} === ${selectedChannel.id} -> ${channel.id === selectedChannel.id}`);

    const setSelectedChannelHandler = () => {
        addToGroup(channel.name, currentUser.user.fullName);
        setSelectedChannel(channel);
    } 

    return(
        <div className="channel" onClick={setSelectedChannelHandler}>
            <div className="channel-selected" data-selected={(channel.id === selectedChannel.id).toString()}>
                <div className="channel-icon">
                    <p>{toEmoji(channel.icon)}</p>
                </div>
                <div className="channel-name">{channel.name}</div>
                {/* <div className="message-count">{channel.messages.length.toString()}</div> */}
                <div className="message-count">0</div> 
            </div>
        </div>
    )
}
