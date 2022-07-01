import React from "react";
/*import { useState } from "react";*/
import './teamchat.css';
import Channel from "../channel/Channel";
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";

export default function TeamChat() {
    /*const [channels, setChannels] = useState([]);*/
    const channels = [{
            id: 0,
            name: 'Design',
            icon: "&#128507;",
            members : ['1', '2', '3'],
            messages : [{
                    text: 'Hello',
                    sender_id : '1',
                    timestamp: '21:18:53'
                }, 
                {
                    text: 'Hey',
                    sender_id: '2',
                    timestamp: '21:18:54'
                },
                {
                    text: 'Heyo guuuys',
                    sender_id: '3',
                    timestamp: '21:18:56'
                }]
        },{
            id: 1,
            name: 'Dev-channel',
            icon: "&#128507;",
            members : ['2', '4', '1'],
            messages : [{
                    text: 'Hello',
                    sender_id : '1',
                    timestamp: '21:18:53'
                }, 
                {
                    text: 'Hey',
                    sender_id: '4',
                    timestamp: '21:18:54'
                },
                {
                    text: 'Heyo guuuys',
                    sender_id: '2',
                    timestamp: '21:18:56'
                }]
        },{
            id: 2,
            name: 'Finance',
            icon: "&#128507;",
            members : ['2', '1'],
            messages : [{
                    text: 'Hello',
                    sender_id : '1',
                    timestamp: '21:18:53'
                }, 
                {
                    text: 'Hey',
                    sender_id: '2',
                    timestamp: '21:18:54'
                }]
        }
    ]

    return (
        <div className="team-chat">
                <div className="chat-name">
                    <h1>Team Chat</h1>
                </div>
                <div className="chat-header">
                    <div className="header-wrapper">
                        <div className="channel-toggle">
                            <div className="toggle">
                                <AiOutlineDown/>
                            </div>
                            <h4>Public Channels</h4>
                            <div className="channel-count"><p>({channels.length})</p></div>
                            <div className="add-channel">
                                <AiOutlinePlus/>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="channels">
                {channels.map((channel) => {
                    return <Channel key={channel.id}
                    channel={channel}/>;
                })}
            </div>
        </div>
    )
    
}