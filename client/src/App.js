import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.css";

import Sidebar from "./components/sidebar/Sidebar";
import ChatLobby from './components/lobby/ChatLobby';


function App() {
    return(
        <div className="page">
            <Sidebar/>
            <ChatLobby/>
        </div>
        // <BrowserRouter>
        //     <div className="page">
        //         <Sidebar/>
        //         <ChatLobby/>
        //     </div>
        // </BrowserRouter>
    )
}

export default App;