import React from "react";
import './chatroom.css'
import { RiAddCircleFill, RiEmotionLaughFill, RiGiftFill, RiFileGifFill, RiFile3Fill } from 'react-icons/ri'

const Chatroom = () => {

    return (
        <div className="chatroom-container">
            <div className="header-container"></div>
            <div className="body-container">
                <div className="chat-container"></div>
                <div className="footer-container">
                    <div className="chatbar-container">
                        <div className="icon-container-one">
                            < RiAddCircleFill className="add-icon-messagebar"/>
                        </div>
                        <input type="text" id="messagebar" name="messagebar" placeholder="Message"></input>
                        <div className="icon-container-two">
                            < RiGiftFill className="emoji-icon-messagebar" />
                            < RiFileGifFill className="emoji-icon-messagebar" />
                            < RiFile3Fill className="emoji-icon-messagebar" />
                            < RiEmotionLaughFill className="emoji-icon-messagebar" id='emoji'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Chatroom;