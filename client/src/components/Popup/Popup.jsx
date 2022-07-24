import React from "react";
import "./popup.css";

export default function Popup(props) {
    return (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            {props.children}
          </div>
        </div>
      );
}