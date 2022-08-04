import React, { useState } from "react";
import "./app.css";

import { getUser } from "./api/user/user";

import ChatPage from "./components/page/ChatPage";

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
            <ChatPage 
            currentUser={currentUser}/>
            :
            <div className="login">
                <input value={inputId} onChange={e => setInputId(e.target.value)}/>
                <button onClick={loginHandler}>Login</button>
            </div>}
        </div>
    )
}

export default App;