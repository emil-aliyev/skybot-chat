import React from "react";
import "./sidebaroption.css"
import { IconContext } from "react-icons";

export default function SidebarOption(props) {
    return(
        <button onClick={props.onClick}>
            <IconContext.Provider value={{ className: "sidebar-option", 
                                           size: props.size,
                                           color: props.color}}>
                {props.children}
            </IconContext.Provider>
        </button>
    )
}