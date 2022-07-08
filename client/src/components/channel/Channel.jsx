import React from "react";
import "./channel.css";
import { IconContext } from "react-icons";
import { AiOutlineStar } from "react-icons/ai";

export default function Channel({ channel, selectedChannel, selected, setSelectedChannel }) {

    // console.log(`${channel.id} === ${selectedChannel.id} -> ${channel.id === selectedChannel.id}`);

    const setSelectedChannelHandler = () => {
        setSelectedChannel(channel);
        console.log(`SELECTED: ${selectedChannel}`);
    } 

    return(
        <div className="channel" onClick={setSelectedChannelHandler}>
            <div className="channel-selected" data-selected={(channel.id === selectedChannel.id).toString()}>
                <div className="channel-icon">
                    <IconContext.Provider value={{size:22}}>
                        <AiOutlineStar />
                    </IconContext.Provider>
                </div>
                <div className="channel-name">{channel.name}</div>
                <div className="message-count">{channel.messages.length.toString()}</div>
            </div>
        </div>
    )
}
