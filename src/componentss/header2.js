import React, { useState } from 'react'
import gorillaLogo from '../media/gorilla.jpg'
import gorillaLogo2 from '../media/chara06.png'
import {NavLink} from 'react-router-dom'
import '../style/headeriki.css'

function Header2() {
    const [isActive,setIsActive] = useState(false)
    const dropDownHandle = () => {
        isActive ? setIsActive(false) : setIsActive(true);
        console.log(isActive);
    }
  return (
    <>
        <header>
            <div className='headerContentsContainer' >
                <div className='headerLogoTextContainer' >
                    <img src={gorillaLogo2} alt='logo' />
                    <h1><NavLink to="/">GORILLA ACADEMY</NavLink></h1>
                </div>
                <div className='headerNewContentContainer1-2' >
                    <div className='headerNewContentContainer2' >
                        <p>Yeni İleti</p>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                <div className='headerUserSideContainer' >
                    <div className='headerUserSideContainer2' >
                        <div className='headerNotificationsContainer' >
                            <i class="fa-solid fa-bell"></i>
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div className='headerUserInformationsContainer' >
                            <div className='headerUserInformationsContainer2' >
                                <img src={gorillaLogo} alt='user' />
                                <div>
                                    <h1>
                                        Ahmet Güleş
                                    </h1>
                                    <h2>
                                        JR.Frontend Developer
                                    </h2>
                                </div>
                                <div className='headerDropDownIcon' onClick={dropDownHandle} >
                                    <i className="fa-solid fa-chevron-down"></i>
                                    <div className={isActive ? 'headerDropDownIconMenuActive' : 'headerDropDownMenuClose'} >
                                        <ul className={isActive ? 'headerDropDownIconUlActive' : 'headerDropDownIconUlClose'} >
                                            <li>Notifications</li>
                                            <li>Messages</li>
                                            <li><NavLink to="/editprofile" >Settings</NavLink></li>
                                            <li onClick={() => {console.log("tıklandı")}} >Log Out</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isActive ? 'headerDropDownPopUpActive' : 'headerDropDownPopUpClose'} >

            </div>
        </header>
    </>
  )
}

export default Header2