import React from "react";
import "./usericon.css";
import randomColor from "../../api/logic/ranndomColorGenerator";

export default function UserIcon( { userName } ){

    const [name, lastname] = userName.split(" ");

    return(
        <div className="user-icon" style={{background: `${randomColor()}`}}>
            <p>{name[0].toUpperCase() + lastname[0].toUpperCase()}</p>
        </div>
    )

}