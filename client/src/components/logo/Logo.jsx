import React from "react";
import "./logo.css"
import { IconContext } from "react-icons";
import { AiFillWechat } from "react-icons/ai";

export default function Logo() {
    return(
        <div className="logo">
            <button>
                <IconContext.Provider value={{ className: "logo", size: 35 }}>
                <>
                    <AiFillWechat/>
                </>
                </IconContext.Provider>
            </button>
        </div>
    )
}