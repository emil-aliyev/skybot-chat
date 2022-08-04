import { getChannelById, addChannel } from "./Helper";

export const onRecieveMessage = (channels, message) => {
    const copyChannel = {...channels.filter(room => room.id === message.toRoomId)[0]}

    copyChannel.messages !== null ? copyChannel.message.push(message) : copyChannel.messages = [message];
    
    const newChannels = channels.map(channel => {
        return channel.id !== copyChannel.id ? channel : copyChannel;
    });
    
    return newChannels;
}

export const onRecievePrivateMessage = (channels, fromPrivateChannel, message) => {
    // Is it possible to send it only to the private chat memebers?
    const privateChannel = getChannelById(message.fromId);
    
    if(!privateChannel.length){
        channels = addChannel(channels, fromPrivateChannel);
    } else {
        const copyChannel = {...channels.filter(room => room.id === message.toRoomId)[0]}
        copyChannel.messages = [...copyChannel.messages, message];
        channels = [...channels, copyChannel];
    }

    return channels;
}

export const onAddChannel = (channels, newChannel) => { return addChannel(channels, newChannel) }

export const onError = (error) => { console.log(error) };

