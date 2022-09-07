import React from "react";
import './rightsidebar.css'
import { RiInboxFill, RiQuestionFill, RiSearchLine } from 'react-icons/ri'
import Cloud from './assets/cloud.JPG'
import Online from './assets/online.png'
import Person from './assets/person.png'

const RightSideBar = () => {
    return (
        <div className="rightsidebar-container">
            
            <div className="column-container-one-right">
            <input type="text" id="searchbar" name="searchbar" placeholder="Search"></input>
            <RiInboxFill className="rsb-icon"/>
            <RiQuestionFill className="rsb-icon"/>

            </div>
            <div className="column-container-two-right">
                <div className="rsb-inner-container-one">
                    <div className="rsb-roll-title">HELPER - 2</div>
                    <div className="rsb-roll-container">
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Cloud} className='cloud-pfp'></img>
                                <img src={Online} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name">
                                MelatoninJr
                            </div>
                        </div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Person} className='cloud-pfp'></img>
                                <img src={Online} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name">
                                Shorty
                            </div>
                        </div>

                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default RightSideBar;