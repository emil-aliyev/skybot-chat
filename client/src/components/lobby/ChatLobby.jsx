import { React, useState } from 'react';
import { getChannels, getUsers } from '../../api/logic/getters';
import ChatMenu from '../menu/ChatMenu';
import TeamChat from '../menu/TeamChat';
import './chatlobby.css';

export default function ChatLobby() {

    const [channels, setChannels] = useState(getChannels());
    const [users, setUsers] = useState(getUsers());
    const [selectedChannel, setSelectedChannel] = useState({});    

    return(
        <div className="chat-lobby">
            <TeamChat channels={channels}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            />
            {Object.keys(selectedChannel).length !== 0 ? 
            <ChatMenu selectedChannel={selectedChannel}/> :
            ""}
        </div>
    )
}