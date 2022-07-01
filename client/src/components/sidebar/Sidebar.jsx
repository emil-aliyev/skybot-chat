import React from "react";
import { useNavigate } from 'react-router-dom';

import "./sidebar.css"

import SidebarOption from "../sidebaroption/SidebarOption";
import Logo from "../logo/Logo";

import { AiOutlineHome, 
         AiOutlineMessage, 
         AiOutlineTeam, 
         AiOutlineComment, 
         AiOutlineRobot, 
         AiOutlineSend, 
         AiOutlineBarChart,
         AiOutlineQuestionCircle, 
         AiOutlineApi} from "react-icons/ai";


export default function Sidebar() {

    const navigate = useNavigate();
    const navigateToChat = () => navigate.push('/chat');

    return (
        <div className="sidebar">
            <Logo></Logo>
            <div className="options">
                <SidebarOption size={25} color="#052B4D" onClick={navigateToChat}>
                    <AiOutlineHome/>
                </SidebarOption>

                <SidebarOption size={25} color="#052B4D">
                    <AiOutlineMessage/>
                </SidebarOption>

                <SidebarOption size={25} color="#052B4D">
                    <AiOutlineTeam/>
                </SidebarOption>

                <SidebarOption size={25} color="#052B4D">
                    <AiOutlineComment/>
                </SidebarOption>

                <SidebarOption size={25} color="#052B4D">
                    <AiOutlineRobot/>
                </SidebarOption>

                <SidebarOption size={25} color="#052B4D">
                    <AiOutlineSend/>
                </SidebarOption>

                <SidebarOption size={25} color="#052B4D">
                    <AiOutlineBarChart/>
                </SidebarOption>

                <SidebarOption size={25} color="#052B4D">
                    <AiOutlineQuestionCircle/>
                </SidebarOption>

                <SidebarOption size={25} color="#052B4D">
                    <AiOutlineApi/>
                </SidebarOption>
            </div>
        </div>        
    );
}