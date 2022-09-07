import React from "react";
import './chatroom.css'
import { RiAddCircleFill, RiEmotionLaughFill, RiGiftFill, RiFileGifFill, RiFile3Fill, RiHashtag, RiNotification2Fill, RiPushpin2Fill, RiUser3Fill } from 'react-icons/ri'

const Chatroom = () => {

    return (
        <div className="chatroom-container">
            <div className="header-container">
                <div className="cr-inner-header-one">
                    <RiHashtag className="emoji-icon-messagebar-two"/>
                    <div className="cr-inner-channel">General-Chat</div>
                </div>
                <div className="cr-inner-header-two">
                    <RiHashtag className="emoji-icon-messagebar"/>
                    <RiNotification2Fill className="emoji-icon-messagebar"/> 
                    <RiPushpin2Fill className="emoji-icon-messagebar"/>
                    <RiUser3Fill className="emoji-icon-messagebar"/>
                </div>
            </div>
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