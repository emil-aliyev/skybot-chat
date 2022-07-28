import React, { useEffect, useState } from "react";
import "./addchannelpopup.css";
import { AiOutlineSmile } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import Picker from 'emoji-picker-react';
import Select from 'react-select';

import Popup from "../Popup";
import { channels } from "../../../api/data/channels";

export default function AddChannelPopup({ createChannel, currentUser, setChannels, getAllUsers, setIsPopupOpen }){

    const [users, setUsers] = useState([]); 

    useEffect(() => {

        const connect = async () => {
            try {
                getAllUsers().then(data => setUsers(users => data));
            } catch (err) {
                console.log(err);
            }
        }

        connect();
    }, [])


    const options = users.map(user => {
        return {value: user.id, label: user.fullName}
    })

    const [isOpenEmojiPicker, setIsOpenEmojiPicker] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const onEmojiClick = (event, emojiObject) => {
        event.preventDefault();
        setChosenEmoji(emojiObject);
    };


    const openEmojiPickerHandler = () => setIsOpenEmojiPicker(isOpenEmojiPicker => !isOpenEmojiPicker);

    const createRoom = (event) => {
        event.preventDefault();
        const roomName = document.querySelector('input').value;
        try{
            const members = selectedOptions.map(member => {
                // console.log("OPTION: ", member);
                // return member[0].Id;
                return {Id: member[0].Id, FullName: member[0].FullName};
            });
            // console.log("MEMBERS: ", members);
            console.log("SENDING THIS: ", roomName, {Id:currentUser.user.id, FullName:currentUser.user.fullName}, members);
            createChannel(roomName, {FullName:currentUser.user.fullName, Id:currentUser.user.id}, members);

            const newChannel = {
                id: 123132321,
                name: roomName,
                icon: "&#10024;",
                members : selectedOptions.map(member => member.Id),
                messages : [{
                        text: 'Hello',
                        senderId : 1,
                        timestamp: '21:18:53'
                    }, 
                    {
                        text: 'Hey',
                        senderId: 2,
                        timestamp: '21:18:54'
                    },
                    {
                        text: 'Heyo guuuys',
                        senderId: 3,
                        timestamp: '21:18:56'
                    }]
            }

            setChannels(channels => [...channels, newChannel]);
        } catch(err){
            console.log(err);
        };


    };

    const handleSelectOptions = (e) => {
        setSelectedOptions(selectedOptions => Array.isArray(e) ? e.map(x => [{Id:x.value, FullName:x.label}]) : []);
    }

    return(
        <Popup setIsPopupOpen={setIsPopupOpen} >
            <div className="add-channel-popup">
                <h2>Create a public channel</h2>
                <form action="">
                    <div className="fields-wrapper">
                        <div className="form-fields">
                            <div className="emoji-field">
                                <div className="emoji-picker" onClick={openEmojiPickerHandler}>
                                    <div className="emoji-icon">
                                        {chosenEmoji == null ?
                                        <IconContext.Provider value={{size:32}}>
                                            <AiOutlineSmile/>
                                        </IconContext.Provider>
                                        : <p>{chosenEmoji.emoji}</p>}
                                    </div>
                                </div>
                                {isOpenEmojiPicker ? <Picker onEmojiClick={onEmojiClick}/> : ""}
                            </div>
                            <input className=".room-name" type="text" maxLength="25" placeholder="Enter channel name"/>
                        </div>
                        <Select
                        isMulti
                        name="colors"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleSelectOptions}
                        />
                    </div>
                    <div className="button-wrapper">
                        <button onClick={createRoom}>Next</button>
                    </div>
                </form>
            </div>
        </Popup>    
    );
}