import React, { useContext, useEffect, useState } from "react";
import "./addchannelpopup.css";
import { AiOutlineSmile } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import Picker from 'emoji-picker-react';
import Select from 'react-select';
import SignalrEvents from "../../../api/SignalrEvents";
import Popup from "../Popup";

import { getAllUsers } from "../../../api/user/user";
import SignalrContext from "../../../signalr/SignalrContext";

const createChannelEvent = new SignalrEvents('CreateRoom', 'AddChannel');

export default function AddChannelPopup({ currentUser, setChannels, setIsPopupOpen }){
    const connectionController = useContext(SignalrContext);
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        if (connectionController) {
            connectionController.subscribeEvent(createChannelEvent);

            createChannelEvent.on = (channel) => {
                setChannels(channels => [...channels, channel]);
            }
    
            getAllUsers().then(data => {
                setUsers(data);
            }).catch(err => console.log(err));
        }
    }, [connectionController])


    const options = users.filter(user => user.id !== currentUser.user.id).map(user => {
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
                return member[0].Id;
            });

            console.log("SENDING THIS: ", roomName, currentUser.user.id, members);

            createChannelEvent.invoke(currentUser.user.id, roomName, members)


            // setChannels(channels => [...channels, newChannel]);
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