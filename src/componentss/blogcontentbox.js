import React from 'react'
import '../style/blogcontentbox.css'
import gorillasrc from '../media/gorilla.jpg'
import { NavLink } from 'react-router-dom'

function BlogContentBox(props) {
  return (
    <>
        <li className='blogContentBoxContainer' onClick={props.click} >
            <NavLink to="/contentshow">
            <div className='blogContentBoxImageContainer' >
                <img src={props.userimage} alt="" />
            </div>
            <div className='blogContentBoxTextContainer' >
                <p>
                    {props.icerikbasligi}
                </p>
                <h1>
                    {props.date}
                </h1>
            </div>
            </NavLink>
        </li>
    </>
  )
}

export default BlogContentBox