export const getChannelById = (channels, queryChannelId) => { 
    return channels.filter(channel => channel.id === queryChannelId) 
};


export const addChannel = (channels, newChannel) => {
    return [...channels, newChannel];
};