import React from "react";
import './rightsidebar.css'
import { RiInboxFill, RiQuestionFill, RiSearchLine } from 'react-icons/ri'

const RightSideBar = () => {
    return (
        <div className="rightsidebar-container">
            
            <div className="column-container-one-right">
            <input type="text" id="searchbar" name="searchbar" placeholder="Search"></input>
            <RiInboxFill className="rsb-icon"/>
            <RiQuestionFill className="rsb-icon"/>

            </div>
            <div className="column-container-two-right">

            </div>
        </div>
    )
}

export default RightSideBar;