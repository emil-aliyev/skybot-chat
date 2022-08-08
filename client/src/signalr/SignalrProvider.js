import { useEffect, useState } from "react";
import SignalrContext from "./SignalrContext";
import ConnectionController from "../api/ConnectionController";

// connectionController.subscribeEvent(createChannelEvent);

// createChannelEvent.on = (channel) => {
//     setChannels(channels => [...channels, channel]);
// }

const SignalProvider = ({
    children,
    connection
}) => {
    const [connectionController, setConnectionController] = useState();

    useEffect(() => {

        const getConnection = connection.start();

        getConnection.then((connection) => {
            const connectionController = new ConnectionController(connection);

            setConnectionController(connectionController);
        }).catch(() => console.log('connection failed'));

        setConnectionController(connectionController)
    }, []);

    <SignalrContext.Provider value={connectionController}>
        {children}
    </SignalrContext.Provider>
}
// 

// export const SignalConsumer = ({
//     children
// }) => {
//     <SignalrContext.Consumer>
//         {(value) => {
//             console.log(value)
//         }}
//     </SignalrContext.Consumer>
// }

// export const SignalConsumer2 = () => {
//     const value = useContext(SignalrContext);
   
//     return null
// }

export default SignalProvider;