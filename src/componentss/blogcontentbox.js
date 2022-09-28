import React from 'react'
import '../style/blogcontentbox.css'
import gorillasrc from '../media/gorilla.jpg'

function BlogContentBox() {
  return (
    <>
        <li className='blogContentBoxContainer' >
            <div className='blogContentBoxImageContainer' >
                <img src={gorillasrc} alt="" />
            </div>
            <div className='blogContentBoxTextContainer' >
                <p>
                    is the title of blog content that contains an article on a topic
                </p>
                <h1>
                    4 days ago
                </h1>
            </div>
        </li>
    </>
  )
}

export default BlogContentBox