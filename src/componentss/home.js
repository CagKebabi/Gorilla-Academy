import React from 'react';
import Main from './main';
import SideBar from './sidebar';
import Header from './header';

function Home() {

  return (
    <div className='App' >
        {/* <CategoryArrays/> */}
        <Header/>
        <div style={{display: "flex"}}>
            <SideBar/>
            <Main/>
        </div>
    </div>
  )
}

export default Home