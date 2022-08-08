import { React, useState } from "react";

import './teamchat.css';

import PrivateChat from "../channel/PrivateChat";
import Channel from "../channel/publicChannel/Channel";
import PanelHeader from "../panelheader/PanelHeader";
import AddChannelPopup from "../Popup/AddChannelPopup/AddChannelPopup";

export default function TeamChat( { createChannel, channels, setChannels, selectedChannel, setSelectedChannel, currentUser, getAllUsers, addToGroup, connectionController } ) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function PopupOpen(){
        setIsPopupOpen(true);
    }

    const publicChannels = channels//.filter(channel => channel.name !== "");

    console.log(publicChannels);

    return (
        <div className="team-chat">
            <div className="chat-intro">
                <h1>Team chat</h1>
            </div>
            <div className="public-channel-panel">
                <PanelHeader 
                title={"Public Channels"} 
                count={publicChannels.length} 
                panelWrapperClass={".channels-wrapper"} 
                onAddClick={PopupOpen}/>
            </div>
            <div className="channels-wrapper">
                <div className="channels">
                    {publicChannels.map((channel) => {
                        return channel.name !== "" ? 
                        <Channel key={channel.id}
                        currentUser={currentUser}
                        channel={channel}
                        selectedChannel={selectedChannel}
                        selected={channel.id === selectedChannel.id}
                        setSelectedChannel={setSelectedChannel}
                        addToGroup={addToGroup}
                        /> : "";
                    })}
                </div>
            </div>
            {<PrivateChat 
            currentUser={currentUser} 
            channels={channels} 
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}/>}

            {isPopupOpen ?
                <AddChannelPopup
                connectionController={connectionController}
                createChannel={createChannel}
                currentUser={currentUser}
                getAllUsers={getAllUsers}
                setChannels={setChannels}
                setIsPopupOpen={setIsPopupOpen}/>
            : ""}

        </div>
    )
    
}