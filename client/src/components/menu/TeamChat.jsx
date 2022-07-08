import React from "react";
/*import { useState } from "react";*/
import './teamchat.css';
import Channel from "../channel/Channel";
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";

export default function TeamChat( { channels, selectedChannel, setSelectedChannel } ) {
    console.log(`Selected channel: ${selectedChannel.name}`);
    return (
        <div className="team-chat">
                <div className="chat-name">
                    <h1>Team chat</h1>
                </div>
                <div className="chat-header">
                    <div className="header-wrapper">
                        <div className="channel-toggle">
                            <div className="toggle">
                                <AiOutlineDown/>
                            </div>
                            <h4>Public Channels</h4>
                            <div className="channel-count"><p>({channels.length})</p></div>
                            <div className="add-channel">
                                <AiOutlinePlus/>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="channels">
                {channels.map((channel) => {
                    return <Channel key={channel.id}
                    channel={channel}
                    selectedChannel={selectedChannel}
                    selected={channel.id === selectedChannel.id}
                    setSelectedChannel={setSelectedChannel}
                    />;
                })}
            </div>
        </div>
    )
    
}