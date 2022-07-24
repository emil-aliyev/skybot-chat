import React from "react";

import "./privatechat.css";

import { getOtherUserInfo, getUserInfo } from "../../api/logic/getters";

import PanelHeader from "../panelheader/PanelHeader";
import PrivateChannel from "./privateChannel/PrivateChannel";

export default function PrivateChat({ currentUser, channels, selectedChannel, setSelectedChannel }){

    const privateChannels = channels.filter(channel => channel.name === "");

    return (
        <div className="private-channel-panel">
            <PanelHeader
            key={Math.random()*10000} 
            title={"Private Channels"} 
            count={privateChannels.length} 
            panelWrapperClass={".private-channels"} 
            onAddClick={null}/>
            
            {privateChannels.length !== 0 ? 
                <div className="private-channels">
                {
                    privateChannels.map(channel => {
                        const otherUser = getOtherUserInfo(channel, currentUser.id);
                        return(
                            <PrivateChannel
                            key={otherUser.id}
                            user={otherUser}
                            channel={channel}
                            selectedChannel={selectedChannel}
                            setSelectedChannel={setSelectedChannel}
                            />
                        )
                    })
                }
                </div> 
            : ""}

            
        </div>
    );
};
