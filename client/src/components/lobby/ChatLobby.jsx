import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ChatMenu from '../menu/ChatMenu';
import TeamChat from '../menu/TeamChat';
import './chatlobby.css';

export default function ChatLobby() {
    return(
        <div className="chat-lobby">
            <TeamChat/>
            <Routes>
                <Route path='/'>NOTHING</Route>
                <Route path='/chat'><ChatMenu/></Route>
            </Routes>
        </div>
    )
}