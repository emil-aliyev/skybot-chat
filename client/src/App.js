import { React, useState, useEffect } from "react";
import "./app.css";

import { getUsers } from "./api/logic/getters";

import ChatPage from "./components/page/ChatPage";

import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';


function App() {

    const [currentUser, setCurrentUser] = useState({});
    // const currentUser = getUsers()[0]; 

    const [connection, setConnection] = useState();
    
    console.log("Current user: ", currentUser);

    useEffect(() => {
        // declare the data fetching function
        const connect = async () => {
            try {
                const connection = new HubConnectionBuilder()
                .withUrl("https://2726-185-129-94-115.eu.ngrok.io/chatHub")
                .configureLogging(LogLevel.Information)
                .build();
    
                console.log("SignalR Connected.");
    
                connection.on("AddChannel", (channel) => console.log(channel));
    
                connection.on("onError", (msg) => console.log(msg));

                connection.on("RecieveMessage", (message) => {
                    console.log(message);
                });

                connection.onclose(e => {
                    setConnection();
                });
                
                await connection.start();
                setConnection(connection);
            } catch (err) {
                console.log(err);
            };
        };
      
        // call the function
        connect()
          // make sure to catch any error
          .catch(console.error);
      }, [])

    const createChannel = async (channel, user, members) => {
        try {
            await connection.invoke("CreateRoom", channel, user, members);
        } catch (err) {
            console.log(err);
        }
    }

    const sendMessage = async (channel, user, message) => {
        try {
          await connection.invoke("SendToRoom", channel, user, message);
        } catch (err) {
          console.log(err);
        }
    }    

    const getAllUsers = async () => {
        try {
            const data = await connection.invoke("GetAllUsers");
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    const recieveMessage = async (channel, message) => {
        try {
          
        } catch (err) {
          console.log(err);
        }
      }
      
    const loginHandler = async () => {
        const id = parseInt(document.querySelector("input").value);
        const user = await connection.invoke("GetUser", id);
        console.log("current user:", user);
        setCurrentUser(currentUser => user);
        // setCurrentUser(currentUser => getUsers()[id-1]);
    }

    return(
        <div className="page">
            {Object.keys(currentUser).length !== 0 ?
            <ChatPage 
            currentUser={currentUser}
            createChannel={createChannel} 
            sendMessage={sendMessage}
            getAllUsers={getAllUsers}/>
            :
            <div className="login">
                <input/>
                <button onClick={loginHandler}>Login</button>
            </div>}
        </div>
    )
}

export default App;