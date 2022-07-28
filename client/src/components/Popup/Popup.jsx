import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./popup.css";

export default function Popup(props) {

  function closePopup(){
    props.setIsPopupOpen(false);
  }

  return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={closePopup}><AiOutlineClose/></span>
          {props.children}
        </div>
      </div>
  );
}