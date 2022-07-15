import React from "react";
import "./channeldescription.css";

export default function ChannelDescription( {selectedChannel} ) {
        return(
        <div className="channel-info">
            <header>
                <div className="channel-display">
                    <div className="icon-wrapper">
                        <h1>&#128640;</h1>
                    </div>
                    <div className="channel-title">
                        <h1>{selectedChannel.name}</h1>
                    </div> 
                </div>
            </header>
        </div>
        )
}