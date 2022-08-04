export default class SignalrEvents {
    constructor(invokeEventName, onEventName, on=()=>{}) {
        this.invokeEventName = invokeEventName;
        this.onEventName = onEventName;

        this.on = on;
        this.invokeSignalr = null;
    }
    invoke = async (...args) => {
        if (this.invokeSignalr) {
            return await this.invokeSignalr(args);
        }
    }
}

