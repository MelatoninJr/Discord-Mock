import React from "react";
import './chatroom.css'
import { RiAddCircleFill, RiEmotionLaughFill, RiGiftFill, RiFileGifFill, RiFile3Fill, RiHashtag, RiNotification2Fill, RiPushpin2Fill, RiUser3Fill } from 'react-icons/ri'
import Message from './Message'
import {UserAuth} from '../context/AuthContext'
import {colRef} from '../firebase'
import { getDocs, addDoc, connectFirestoreEmulator, serverTimestamp, query, orderBy, where } from "firebase/firestore";
import { useEffect, useState } from "react";


const Chatroom = () => {
    const {user} = UserAuth()
    const [count, setCount] = useState(0);


    const handlekeypress = (e) => {
        if(e.key === 'Enter') {
            addDoc(colRef, {
                name: user.displayName,
                profilePicUrl: user.photoURL,
                text: e.target.value,
                timestamp: serverTimestamp()
            })
            e.target.value = ''

        }
    }

    const [messageArray, setMessageArray] = useState([])
    useEffect(() => {

        const q = query(colRef, orderBy("timestamp", "asc"))


        getDocs(q)
            .then((snapshot) => {
                let messagearray = []

                snapshot.docs.forEach((doc) => {
                    messagearray.push({...doc.data() })
                })
                setMessageArray(messagearray)

            })
            .catch(err => {
                console.log(err.message)
            })
    }, [messageArray])

/*
    useEffect(() => {

        getDocs(colRef)
            .then((snapshot) => {
                let messagearray = []

                snapshot.docs.forEach((doc) => {
                    messagearray.push({...doc.data() })
                })
                setMessageArray(messagearray)

            })
            .catch(err => {
                console.log(err.message)
            })
    }, [messageArray])
*/
 

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
                <div className="chat-container">
                {messageArray.map((value, index) => (
                  <div key={index} >{<Message messagename={messageArray[index].name}  messagepicture={messageArray[index].profilePicUrl} messagetext={messageArray[index].text}  />}</div>
                  ))}

                </div>
                <div className="footer-container">
                    <div className="chatbar-container">
                        <div className="icon-container-one">
                            < RiAddCircleFill className="add-icon-messagebar"/>
                        </div>
                        <input type="text" id="messagebar" name="messagebar" placeholder="Message" onKeyPress={handlekeypress} ></input>
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