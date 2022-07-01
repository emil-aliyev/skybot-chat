import React from "react";
import "./channel.css";
import { IconContext } from "react-icons";
import { AiOutlineStar } from "react-icons/ai";

export default function Channel({ channel }) {
    return(
        <div className="channel">
            <div className="channel-selected">
                <div className="channel-icon">
                    <IconContext.Provider value={{size:22}}>
                        <AiOutlineStar />
                    </IconContext.Provider>
                </div>
                <div className="channel-name">{channel.name}</div>
                <div className="message-count">{channel.messages.length.toString()}</div>
            </div>
        </div>
    )
}
