import React from 'react'
import Main from './main'
import Header from './header'
import MainCategories from './maincategories'
import SideBarCategories from './sidebarcategories'

function Categories() {
  return (
    <div className='App' >
        <Header/>
        <div style={{display: "flex"}}>
            <SideBarCategories/>
            <MainCategories/>
        </div>
    </div>
  )
}

export default Categories