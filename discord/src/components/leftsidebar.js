import React from "react";
import './leftsidebar.css'
import Cloud from './assets/cloud.JPG'
import DiscordHome from './assets/discordhome.png'
import Odin from './assets/odindiscord.png'
import Jpeg from './assets/jpeg.png'
import { RiArrowDropDownLine, RiMicFill, RiHeadphoneFill, RiSettings5Fill, RiHome5Fill, RiAddFill, RiCompass3Fill, RiDiscordFill, RiHashtag, RiCheckboxMultipleFill, RiPlantFill, RiPlantLine, RiQuestionAnswerFill, RiVolumeUpFill } from "react-icons/ri"

const LeftSideBar = () => {
    return (
        <div className="leftsidebar-container">
            <div className="column-container-one">
                <div className="header-box-one"></div>
                <div className="header-box-two">
                    <div className="hbt-title">The Odin Project</div>
                    <div className="hbt-icon"><RiArrowDropDownLine className='lsb-dropdown' /></div>
                </div>
            </div>
            <div className="column-container-two">
                <div className="ct-one">
                    <div className="ct-one-home">
                        <div className="server-icon" id='home-server'><RiDiscordFill /></div>
                        <div className="server-border"></div>

                    </div>
                    <div className="ct-one-servers">
                        <div className="server-icon"><img src={Odin} className='server-image'></img></div>
                        <div className="server-icon"><img src={Jpeg} className='server-image'></img></div>
                        <div className="server-icon"><img src={Cloud} className='server-image'></img></div>
                        <div className="server-icon" id='add-server'><RiAddFill /></div>
                        <div className="server-icon" id='add-server'><RiCompass3Fill id='compass-icon'/></div>




                    </div>
                </div>
                <div className="ct-two">
                    <div className="ct-body">
                        <div className="lsb-home-container">
                            <div className="lsb-home-innercontainer">
                                <RiHome5Fill className="lsb-body-icon" />
                                <div className="lsb-body-title">Home</div>
                            </div>
                            <div className="lsb-home-border"></div>
                        </div>
                        <div className="channel-segment-container">
                        <div className="channel-inner-container-one">
                            <RiArrowDropDownLine className='channel-dropdown-icon'/>
                            <div className="channel-title-text">Initial Content</div>
                            
                        </div>      
                            <div className="channel-inner-container-two">
                            <div className="lsb-channel-innercontainer">
                                <RiPlantLine className="lsb-body-icon" />
                                <div className="lsb-body-title">announcements</div>
                            </div>
                            <div className="lsb-channel-innercontainer">
                                <RiHashtag className="lsb-body-icon" />
                                <div className="lsb-body-title">welcome</div>
                            </div>
                            <div className="lsb-channel-innercontainer">
                                <RiHashtag className="lsb-body-icon" />
                                <div className="lsb-body-title">introduction</div>
                            </div>
                            <div className="lsb-channel-innercontainer">
                                <RiCheckboxMultipleFill className="lsb-body-icon" />
                                <div className="lsb-body-title">rules</div>
                            </div>
                            <div className="lsb-channel-innercontainer">
                                <RiHashtag className="lsb-body-icon" />
                                <div className="lsb-body-title">faq</div>
                            </div>
                            <div className="lsb-channel-innercontainer">
                                <RiHashtag className="lsb-body-icon" />
                                <div className="lsb-body-title">roles</div>
                            </div>
                            
                            </div>
                            
                        </div>
                        <div className="channel-segment-container">
                        <div className="channel-inner-container-one">
                            <RiArrowDropDownLine className='channel-dropdown-icon'/>
                            <div className="channel-title-text">The Odin Project</div>
                            
                        </div>      
                            <div className="channel-inner-container-two">
                            <div className="lsb-channel-innercontainer">
                                <RiHashtag className="lsb-body-icon" />
                                <div className="lsb-body-title">general-chat</div>
                            </div>
                            <div className="lsb-channel-innercontainer">
                                <RiHashtag className="lsb-body-icon" />
                                <div className="lsb-body-title">offtopic-chat</div>
                            </div>
                            <div className="lsb-channel-innercontainer">
                                <RiQuestionAnswerFill className="lsb-body-icon" />
                                <div className="lsb-body-title">suggestions</div>
                            </div>
                            <div className="lsb-channel-innercontainer">
                                <RiHashtag className="lsb-body-icon" />
                                <div className="lsb-body-title">contributions</div>
                            </div>
                            <div className="lsb-channel-innercontainer">
                                <RiVolumeUpFill className="lsb-body-icon" />
                                <div className="lsb-body-title">voice-chat</div>
                            </div>
                            <div className="lsb-channel-innercontainer">
                                <RiVolumeUpFill className="lsb-body-icon" />
                                <div className="lsb-body-title">studying</div>
                            </div>
                            
                            </div>
                            
                        </div>
                    </div>
                    <div className="ct-footer">
                        <div className="lsb-footer-one">
                            <div className="lsb-footer-pfp">
                                <img src={Cloud} className='server-image' id='pfp'></img>
                            </div>
                            <div className="lsb-footer-name">
                                <div className="lsb-footer-username">MelatoninJr</div>
                                <div className="lsb-footer-id">#9438</div>

                            </div>
                        </div>
                        <div className="lsb-footer-two">
                            <RiMicFill className="lsb-footer-icon"/>
                            <RiHeadphoneFill className="lsb-footer-icon"/>
                            <RiSettings5Fill className="lsb-footer-icon"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar;