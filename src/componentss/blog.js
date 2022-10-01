import React from 'react'
import Main from './main'
import Header from './header'
import MainBlog from './mainblog'
import SideBarBlog from './sidebarblog'


function Blog() {
    

  return (
    <div className='App' >
        <Header/>
        <div style={{display: "flex"}}>
            <SideBarBlog/>
            <MainBlog/>
        </div>
    </div>
  )
}

export default Blog