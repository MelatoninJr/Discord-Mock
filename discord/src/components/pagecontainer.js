import React from "react";
import './pagecontainer.css'
import LeftSideBar from './leftsidebar'
import Chatroom from './chatroom'
import RightSideBar from './rightsidebar'

const PageContainer = () => {


    return(
        <div className="app-container">
            <LeftSideBar />
            <Chatroom />
            <RightSideBar />
        </div>
    )
}

export default PageContainer;