import React from 'react'
import'../style/contentbox.css'
import cimage from '../media/c.png'

function ContentBox(props) {
  return (
    <>
      <div onClick={props.click} className='contentBox' >
        <div className='contentBoxDiv1' >
          <i class="fa-solid fa-eye"></i>
          <h1>{props.icerikbasligi}</h1>
          <h2>{props.date}</h2>
        </div>
        <div className='contentBoxDiv2' >
          <div>
            <img src={props.categoryimage} alt="" />
            <h1>{props.icerikkategorisi}</h1>
          </div>
        </div>
        <div className='contentBoxDiv3' >
          <div>
            CONFIRMED
          </div>
        </div>
        <div className='contentBoxDiv4' >
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </>
  )
}

export default ContentBox