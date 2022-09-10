import React from "react";
import './Message.css'

const Message = (props) => {

    return (
        <div className="message-container">
            <div className="message-pfp-container">
                <div className="message-pfp-inner">
                    <img src={props.messagepicture} className='message-pfp' ></img>
                </div>
            </div>
            <div className="message-body-containenr">
                <div className="mb-title-container">{props.messagename} </div>
                <div className="mb-message-container">{props.messagetext}</div>
            </div>
        </div>
    )
}

export default Message;