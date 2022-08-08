import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { onAddChannel, onError, onRecieveMessage } from './onFunctions';
import { URL } from './serverUrl';

export default async function connect() {
    const connection = new HubConnectionBuilder()
        .withUrl(`${URL}/chatHub`)
        .configureLogging(LogLevel.Information)
        .withAutomaticReconnect(2000)
        .build();

    await connection.start();

    return connection;
}

/*
 connection.on("RecieveMessage", (message) => {
            console.log("New message: ", message);
            console.log("After new mssage: ", channels);
            const copyChannel = {...channels.filter(room => room.id === message.toRoomId)[0]}
            if (copyChannel.messages !== null){
                copyChannel.messages.push(message);
            } else {
                copyChannel.messages = [message];
            }
            
            const newChannels = channels.map(channel => {
                if (channel.id !== copyChannel.id){
                    return channel;
                } else {
                    return copyChannel;
                }
            });
            setChannels(channels => newChannels);
        }
*/