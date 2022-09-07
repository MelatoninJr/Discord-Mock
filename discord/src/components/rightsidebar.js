import React from "react";
import './rightsidebar.css'
import { RiInboxFill, RiQuestionFill, RiSearchLine } from 'react-icons/ri'
import Cloud from './assets/cloud.JPG'
import Online from './assets/online.png'
import Person from './assets/person.png'
import Cat from './assets/cat.png'
import Crab from './assets/crab.png'
import Frog from './assets/frog.png'
import Cake from './assets/cake.png'
import Persontwo from './assets/3dpersonone.png'
import Personthree from './assets/3dpersontwo.png'
import Personfour from './assets/personfour.png'
import Drawpersonone from './assets/drawpersonone.png'
import Drawpersontwo from './assets/drawpersontwo.png'
import DND from './assets/dnd.png'
import Idle from './assets/idle.png'




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
                    <div className="rsb-roll-title">HOST - 1</div>
                    <div className="rsb-roll-container">
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Cloud} className='cloud-pfp'></img>
                                <img src={Online} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name" id="helper">
                                MelatoninJr
                            </div>
                        </div>

                        <div className="rsb-roll-title-two">FRIENDS - 5</div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Person} className='cloud-pfp'></img>
                                <img src={Idle} className='idle-pfp'></img>
                            </div>
                            <div className="rsb-roll-name-friend">
                                Shorty
                            </div>
                            
                        </div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Cat} className='cloud-pfp'></img>
                                <img src={Online} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name-friend">
                                SlothCat
                            </div>
                            
                        </div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Crab} className='cloud-pfp'></img>
                                <img src={DND} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name-friend">
                                HaroldZoid
                            </div>
                            
                        </div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Frog} className='cloud-pfp'></img>
                                <img src={Online} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name-friend">
                                Lilly M
                            </div>
                            
                            
                        </div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Cake} className='cloud-pfp'></img>
                                <img src={Online} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name-friend">
                                Cake
                            </div>
                            
                            
                        </div>
                        <div className="rsb-roll-title-two">ONLINE - 6</div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Persontwo} className='cloud-pfp'></img>
                                <img src={Online} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name">
                                Red Soda
                            </div>
                            
                        </div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Personthree} className='cloud-pfp'></img>
                                <img src={Idle} className='idle-pfp'></img>
                            </div>
                            <div className="rsb-roll-name">
                                Peaches
                            </div>
                            
                        </div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Drawpersonone} className='cloud-pfp'></img>
                                <img src={Idle} className='idle-pfp'></img>
                            </div>
                            <div className="rsb-roll-name">
                                Eduardo
                            </div>
                            
                        </div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Drawpersontwo} className='cloud-pfp'></img>
                                <img src={DND} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name">
                                Alexandria Kirby
                            </div>
                            
                        </div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Personfour} className='cloud-pfp'></img>
                                <img src={Online} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name">
                                Emily Willcox
                            </div>
                            
                        </div>
                        <div className="rsb-individual-roll">
                            <div className="rsb-roll-pfp">
                                <img src={Drawpersontwo} className='cloud-pfp'></img>
                                <img src={Online} className='online-pfp'></img>
                            </div>
                            <div className="rsb-roll-name">
                                Hannah Till
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default RightSideBar;