import { React, useState } from 'react';
import { getChannels, getUsers, getUserChannel, getOtherUserInfo } from '../../api/logic/getters';
import ChannelDescription from '../channel/channelDescription/ChannelDescription';
import ChatMenu from '../menu/ChatMenu';
import TeamChat from '../menu/TeamChat';
import './chatlobby.css';

export default function ChatLobby() {
        
    const currentUser = getUsers()[0];
    
    const [channels, setChannels] = useState(getUserChannel(currentUser.id, getChannels()));
    const [users, setUsers] = useState(getUsers());
    const [selectedChannel, setSelectedChannel] = useState({});    

    return(
        <div className="chat-lobby">
            <TeamChat channels={channels}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            currentUser={currentUser}
            />
            {Object.keys(selectedChannel).length !== 0 ? 
            <ChatMenu selectedChannel={selectedChannel} setSelectedChannel={setSelectedChannel} currentUser={currentUser} isPrivate={selectedChannel.name === ""}/> :
            ""}
            {Object.keys(selectedChannel).length !== 0 ? 
            <ChannelDescription 
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            currentUser={currentUser}/> :
            ""}
        </div>
    )
}