import React, { useEffect } from 'react'
import '../style/sidebar.css'
import {useState} from 'react'
import { NavLink } from 'react-router-dom';

function SideBar() {
  const [isOnClicked,setIsOnClicked] = useState([]);
  let deneme = [true,false,true];

  const navigationsHandle = (e) => {
    deneme = [false,false,false]
    deneme[e] = true;
    setIsOnClicked(deneme)
    console.log(deneme)
  }

useEffect(() => {
    document.getElementById("0").click()
},[])

  return (
    <>
        <aside className='asideBarContainer1' >
            <div className='asideBarContainer2' >
                <ul className='navigationsListContainer' >
                    <li id='0' onClick={(e) => {navigationsHandle(e.target.id)}} className={isOnClicked[0] ? 'asideBarNavigationOnclick' : 'asideBarNavigation'}><i className="fa-sharp fa-solid fa-house-chimney"></i>Anasayfa</li> 
                    <li id='1' onClick={(e) => {navigationsHandle(e.target.id)}} className={isOnClicked[1] ? 'asideBarNavigationOnclick' : 'asideBarNavigation'}><NavLink to="/categories/list" id='1' ><i className="fa-solid fa-list"></i>Kategoriler</NavLink></li>
                    <li id='2' onClick={(e) => {navigationsHandle(e.target.id)}} className={isOnClicked[2] ? 'asideBarNavigationOnclick' : 'asideBarNavigation'}><NavLink to="/blog" ><i className="fa-solid fa-blog"></i>Blog</NavLink></li>
                </ul>
            </div>
        </aside>
    </>
  )
}

export default SideBar