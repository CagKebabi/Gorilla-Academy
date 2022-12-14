import React, { useState,useEffect } from 'react'
import gorillaLogo from '../media/gorilla.jpg'
import gorillaLogo2 from '../media/chara06.png'
import {NavLink} from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase"
import db from '../firebase'
import { auth } from "../firebase"
import defaultUser from '../media/defaultuser.jpg'
import '../style/headeriki.css'

function Header2() {
    const useruid = localStorage.getItem("useruid")

    const [isActive,setIsActive] = useState(false);
    const [username2,setusername2] = useState("");
    const [unvan,setUnvan] = useState("")

    const dropDownHandle = () => {
        isActive ? setIsActive(false) : setIsActive(true);
        console.log(isActive);
    }



    useEffect(() => {
        getDoc(doc(db, "users", useruid)).then(docSnap => {
            if (docSnap.exists()) {
                setusername2(docSnap.data().username);
                setUnvan(docSnap.data().email)
            } else {
              console.log("No such document!");
              console.log(useruid);
            }
          })
    },[])

    useEffect(() => {
        getDownloadURL(ref(storage, `profileImages/${useruid}`))
        .then((url) => {
            const element = document.getElementById('header2Userİmage')
            element.setAttribute('src',url);
            console.log(url)
        })
        .catch((e) => {
            //alert(e.message)
        })
    },[])
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
                                <img src={defaultUser} alt='user' id='header2Userİmage' />
                                <div>
                                    <h1>
                                        {username2}
                                    </h1>
                                    <h2>
                                        {unvan}
                                    </h2>
                                </div>
                                <div className='headerDropDownIcon' onClick={dropDownHandle} >
                                    <i className="fa-solid fa-chevron-down"></i>
                                    <div className={isActive ? 'headerDropDownIconMenuActive' : 'headerDropDownMenuClose'} >
                                        <ul className={isActive ? 'headerDropDownIconUlActive' : 'headerDropDownIconUlClose'} >
                                            <li>Notifications</li>
                                            <li>Messages</li>
                                            <li><NavLink to="/editprofile" >Settings</NavLink></li>
                                            <li><NavLink to="/"  onClick={() => {auth.signOut();console.log(auth)}} >Log Out</NavLink></li>
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