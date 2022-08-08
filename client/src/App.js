import React, { useState } from "react";
import "./app.css";

import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

import { getUser } from "./api/user/user";
import SignalProvider from "./signalr/SignalrProvider";
import ChatPage from "./components/page/ChatPage";
import { URL } from './api/serverUrl';

const axios = require('axios');

function App() {
    const [currentUser, setCurrentUser] = useState();
    const [inputId, setInputId] = useState("");

    const loginHandler = async () => {
        // вынести этот запрос в API
        // сменить название endpoint-ов
        getUser(inputId).then(data => {
            setCurrentUser(data)
        })
    }

    return(
        <div className="page">
            {currentUser ?
            <SignalProvider 
                connection={
                    new HubConnectionBuilder()
                    .withUrl(`${URL}/chatHub`)
                    .configureLogging(LogLevel.Information)
                    .withAutomaticReconnect(2000)
                    .build()
                }
            >
                <ChatPage currentUser={currentUser}/>
            </SignalProvider>
         
            :
            <div className="login">
                <input value={inputId} onChange={e => setInputId(e.target.value)}/>
                <button onClick={loginHandler}>Login</button>
            </div>}
        </div>
    )
}

export default App;