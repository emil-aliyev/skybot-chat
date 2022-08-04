import React from "react";
import "./channeldescription.css";
import toEmoji from "../../../api/logic/toEmoji";
import { AiOutlineClose } from "react-icons/ai";
import UserIcon from "../../userIcon/UserIcon";
import PanelHeader from "../../panelheader/PanelHeader";

export default function ChannelDescription( {selectedChannel, currentUser, removeUser} ) {
        return(
        <div className="channel-info">
                <div className="channel-display">
                    <div className="icon-wrapper">
                        {selectedChannel.name !== "" ? <h1>{toEmoji(selectedChannel.icon)}</h1> 
                        : <UserIcon userName={getOtherUserInfo(selectedChannel, currentUser.id).name}/>}
                    </div>
                    <div className="channel-title">
                        <h1>{selectedChannel.name !== "" ? selectedChannel.name : getOtherUserInfo(selectedChannel, currentUser.id).name}</h1>
                    </div> 
                </div>
                
                {selectedChannel.name !== "" ?
                <div className="members-list-panel">
                    
                    <div className="member-panel">
                        {<PanelHeader
                        title={"Members"}
                        count={selectedChannel.roomUsers.length}
                        panelWrapperClass={".members-list"}/>}
                    </div>

                    <div className="members-list">
                        {selectedChannel.roomUsers.map(member => {
                            // const member = getUserInfo(memberId);
                            return(
                                <div className="member">
                                    <div className="member-row">
                                        <UserIcon key={member.id} userName={member.fullName}/>
                                        <p className="member-name">{member.fullName}</p>
                                        <button onClick={() => {
                                            console.log(selectedChannel, parseInt(selectedChannel.id), parseInt(member.id))
                                            removeUser(selectedChannel.name, member.id, selectedChannel.id)
                                            }}><AiOutlineClose/></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                : ""}
        </div> 


        )
}