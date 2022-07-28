import { React, useEffect } from 'react';
import ChannelDescription from '../channel/channelDescription/ChannelDescription';
import ChatMenu from '../menu/ChatMenu';
import TeamChat from '../menu/TeamChat';
import './chatlobby.css';

export default function ChatLobby(
    {currentUser,
    channels,
    setChannels,
    // users,
    // setUsers,
    selectedChannel,
    setSelectedChannel,
    // connect,
    createChannel,
    sendMessage,
    getAllUsers}) {

    return(
        <div className="chat-lobby">
            <TeamChat 
            createChannel={createChannel}
            channels={channels}
            setChannels={setChannels}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            currentUser={currentUser}
            getAllUsers={getAllUsers}
            />
            {Object.keys(selectedChannel).length !== 0 ?
            <ChatMenu 
            sendMessage={sendMessage}
            selectedChannel={selectedChannel} 
            setSelectedChannel={setSelectedChannel} 
            currentUser={currentUser} 
            isPrivate={selectedChannel.name === ""}/> :
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