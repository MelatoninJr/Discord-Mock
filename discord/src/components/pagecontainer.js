import React from "react";
import './pagecontainer.css'
import LeftSideBar from './leftsidebar'
import Chatroom from './chatroom'
import RightSideBar from './rightsidebar'
import { useState } from "react";
import {colRef} from '../firebase'
import { getDocs, addDoc, connectFirestoreEmulator } from "firebase/firestore";
import { useEffect } from "react";


const PageContainer = (props) => {
    const [count, setCount] = useState(0);


    return(
        <div className="app-container">
            <LeftSideBar  />
            <Chatroom />
            <RightSideBar />
        </div>
    )
}

export default PageContainer;