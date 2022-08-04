export default class ConnectionController {
    constructor(connection) {
        this.connection = connection;
    }
    subscribeEvent = (signalrEvents) => {
        signalrEvents.invokeSignalr = async (args) => await this.connection.invoke(signalrEvents.invokeEventName, ...args);
        this.connection.on(signalrEvents.onEventName, signalrEvents.on);
    }

    // sendMessage = async (channel, user, message) => {
    //     try {
    //       await this.connection.invoke("SendToRoom", channel, user, message);
    //     } catch (err) {
    //       console.log(err);
    //     }
    // }    

    // getAllUsers = async () => {
    //     //CONVERT THIS INTO AN API CALL
    //     try {
    //         await connection.invoke("GetAllUsers");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // addToGroup = async (channelName, userName) => {
    //     try {
    //         await connection.invoke("Join", channelName, userName);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // removeUser = async (channelName, userId, channelId) => {
    //     try {
    //         await connection.invoke("Remove", channelName, userId, channelId);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // onAddChannelSubscribe = (fn) => {
    //     this.onAddChannel = fn;
    // }

    // onErrorSubscribe = (fn) => {
    //     this.onError = fn;

    // }
    // onRecieveMessageSubscribe = (fn) => {
    //     this.onRecieveMessage = fn;
    // }
    
    // #subscribeEvents = (event) => {
    //     this.connection.on("addChannel", this.onAddChannel);
    //     this.connection.on("onError", this.onError);
    //     this.connection.on("recieveMessage", this.onRecieveMessage);
    // }
}

