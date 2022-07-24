import { React, useState } from "react";

import './teamchat.css';

import { users } from "../../api/data/users";

import PrivateChat from "../channel/PrivateChat";
import Channel from "../channel/publicChannel/Channel";
import PanelHeader from "../panelheader/PanelHeader";
import Popup from "../Popup/Popup";



export default function TeamChat( { channels, setChannels, selectedChannel, setSelectedChannel, currentUser } ) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function PopupOpen(){
        setIsPopupOpen(true);
    }

    function PopupClose(){
        setIsPopupOpen(false);
    }

    const publicChannels = channels.filter(channel => channel.name !== "");

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
                        channel={channel}
                        selectedChannel={selectedChannel}
                        selected={channel.id === selectedChannel.id}
                        setSelectedChannel={setSelectedChannel}
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
            <Popup  handleClose={PopupClose}>
                <h2>Create a public channel</h2>
                <h4>Name</h4>
                <input type="text"/>
                
            </Popup>    
            : ""}

        </div>
    )
    
}