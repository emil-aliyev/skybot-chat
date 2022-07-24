import React from "react";
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";

import "./panelheader.css";

import { togglePanel } from "../../api/logic/toggle";

export default function PanelHeader( {title, count, panelWrapperClass, onAddClick} ){
    
    return (
        <div className="private-chats">
            <header>
                <div className="private-toggle" onClick={togglePanel(panelWrapperClass)}>
                    <AiOutlineDown/>
                </div>
                <h4>{title}</h4>
                <p className="private-channel-count">({count})</p>
                <div className="private-add-channel" onClick={onAddClick}>
                    <AiOutlinePlus/>
                </div>
            </header>
        </div>
    );   
}