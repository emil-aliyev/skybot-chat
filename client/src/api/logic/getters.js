import { channels } from '../data/channels';
import { users } from '../data/users';


export const getChannels = () => {return channels};
export const getUsers = () => {return users};

export const getUserChannel = (userId, channels) => {
    const userChannels = [];

    channels.forEach(channel => {
        if (channel.members.includes(userId)) {
            userChannels.push(channel);
        }
    });
    
    return userChannels
};

export const getUserInfo = (memberId) => {
    return users[memberId-1];
};

export const getMemebersInfoIn = (channel) => {
    return channel.members.map(memberId => getUserInfo(memberId));
};

export const getOtherUserInfo = (channel, currentUserId) => {
    const otherUserId = channel.members.filter(member => member.id !== currentUserId)[0];
    return getUserInfo(otherUserId);
};