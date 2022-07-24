import React from "react";

import "./privatechannel.css";

import UserIcon from "../../userIcon/UserIcon";



export default function PrivateChannel({ user, channel, selectedChannel, setSelectedChannel }){

    const setSelectedChannelHandler = () => {
        setSelectedChannel(channel);
    } 

    return (
        <div className="private" onClick={setSelectedChannelHandler}>
            <div className="channel-selected" data-selected={(channel.id === selectedChannel.id).toString()}>
                <UserIcon key={user.id} userName={user.name}/>
                <p className="member-name">{user.name}</p>
                <p className="private-message-count">{channel.messages.length}</p>
            </div>
        </div>
    );

};