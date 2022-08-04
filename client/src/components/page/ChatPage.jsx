import React, { useState, useEffect} from "react";

import connect from "../../api/Connector";
import ConnectionController from "../../api/ConnectionController";

import Sidebar from "../sidebar/Sidebar";
import ChatLobby from '../lobby/ChatLobby';


export default function ChatPage({ currentUser }){

    const [channels, setChannels] = useState(currentUser.roomExistUsers);
    const [selectedChannel, setSelectedChannel] = useState({});   
    const [connectionController, setConnectionController] = useState();

    useEffect(() => {
        connectionController.subscribeEvent(createChannelEvent);

        createChannelEvent.on = (channel) => {
            setChannels(channels => [...channels, channel]);
        }

        getAllUsers().then(data => {
            setUsers(data);
        }).catch(err => console.log(err));
        
        const getConnection = connect();

        getConnection.then((connection) => {
            const connectionController = new ConnectionController(connection);

            setConnectionController(connectionController);
        }).catch(() => alert('connection failed'));

    }, [])



    // useEffect(() => {
    //     console.log("Connection!")
    //     const connect = async () => {
    //         try {
    //             const connection = new HubConnectionBuilder()
    //             .withUrl(`${URL}/chatHub`)
    //             .configureLogging(LogLevel.Information)
    //             .withAutomaticReconnect(2000)
    //             .build();
    
    //             connection.on("AddChannel", (channel) => console.log(channel));

    //             connection.on("onError", (msg) => console.log(msg));

    //             connection.on("RecieveMessage", (message) => {
    //                 console.log("New message: ", message);
    //                 console.log("After new mssage: ", channels);
    //                 const copyChannel = {...channels.filter(room => room.id === message.toRoomId)[0]}
    //                 if (copyChannel.messages !== null){
    //                     copyChannel.messages.push(message);
    //                 } else {
    //                     copyChannel.messages = [message];
    //                 }
                    
    //                 const newChannels = channels.map(channel => {
    //                     if (channel.id !== copyChannel.id){
    //                         return channel;
    //                     } else {
    //                         return copyChannel;
    //                     }
    //                 });
    //                 setChannels(channels => newChannels);
    //             });

    //             connection.onclose(e => {
    //                 setConnection();
    //             });
                
    //             await connection.start();
    //             setConnection(connection);
    //             console.log("connection id: ", connection.ConnectionId);
    //         } catch (err) {
    //             console.log(err);
    //         };
    //     };
      
    //     connect().catch(console.error);
    //   }, [])

    // const createChannel = async (channel, user, members) => {
    //     try {
    //         const room = await connection.invoke("CreateRoom", channel, user, members);
    //         console.log("New room: ", room);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // const sendMessage = async (channel, user, message) => {
    //     try {
    //       await connection.invoke("SendToRoom", channel, user, message);
    //     } catch (err) {
    //       console.log(err);
    //     }
    // }    

    // const getAllUsers = async () => {
    //     try {
    //         const data = await connection.invoke("GetAllUsers");
    //         return data;
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // const addToGroup = async (channelName, userName) => {
    //     try {
    //         await connection.invoke("Join", channelName, userName);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // const removeUser = async (channelName, userId, channelId) => {
    //     try {
    //         await connection.invoke("Remove", channelName, userId, channelId);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    /*      // sendMessage={sendMessage}
            // getAllUsers={getAllUsers}
            // addToGroup={addToGroup}
            // removeUser={removeUser}/>*/

    return(
        <>
            <Sidebar/>
            <ChatLobby 
                currentUser={currentUser}
                channels={channels}
                setChannels={setChannels}
                // users={users}
                // setUsers={setUsers}
                selectedChannel={selectedChannel}
                setSelectedChannel={setSelectedChannel}
                connectionController={connectionController}/>
        </>
    );
};