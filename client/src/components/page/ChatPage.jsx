import {React, useState} from "react";


import { getChannels, getUsers, getUserChannel } from "../../api/logic/getters";

import Sidebar from "../sidebar/Sidebar";
import ChatLobby from '../lobby/ChatLobby';

export default function ChatPage( 
    {currentUser,
    createChannel,
    sendMessage,
    getAllUsers} ){

    console.log("CURRENT USER ROOMS:", currentUser.roomExistUsers);
    const [channels, setChannels] = useState(currentUser.roomExistUsers);
    // const [users, setUsers] = useState(getUsers());
    const [selectedChannel, setSelectedChannel] = useState({});   
    
    return(
        <div className="page">
            <Sidebar/>
            <ChatLobby 
            currentUser={currentUser}
            channels={channels}
            setChannels={setChannels}
            // users={users}
            // setUsers={setUsers}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            createChannel={createChannel} 
            sendMessage={sendMessage}
            getAllUsers={getAllUsers}/>
        </div>
    );
};