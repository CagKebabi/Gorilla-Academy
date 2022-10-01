import React from 'react';
import Main from './main';
import SideBar from './sidebar';
import Header from './header';
import CategoryContentIndexeContext from '../context/categroycontentindexcontext';
import { useContext } from 'react';
import CategoryArrays from './categoryarrays';

function Home() {
  const {html,setHtml} = useContext(CategoryContentIndexeContext);
  const {css,setCss} = useContext(CategoryContentIndexeContext);
  const {javascript,setJavascript} = useContext(CategoryContentIndexeContext);
  const {react,setReact} = useContext(CategoryContentIndexeContext);
  const {vue,setVue} = useContext(CategoryContentIndexeContext);
  const {cplus,setCplus} = useContext(CategoryContentIndexeContext);
  const {csharp,setCsharp} = useContext(CategoryContentIndexeContext);
  const {kotlin,setKotlin} = useContext(CategoryContentIndexeContext);
  const {swift,setSwift} = useContext(CategoryContentIndexeContext);
  const {sass,setSass} = useContext(CategoryContentIndexeContext);
  const {bootstrap,setBootstrap} = useContext(CategoryContentIndexeContext);
  const {firebase,setFirebase} = useContext(CategoryContentIndexeContext);

  console.log("html array: ",html)
  console.log("css array: ",css)
  console.log("javascript array: ",javascript)
  console.log("react array: ",react)
  console.log("vue array: ",vue)
  console.log("kotlin array: ",kotlin)
  console.log("swift array: ",swift)
  console.log("sass array: ",sass)
  console.log("bootstrap array: ",bootstrap)
  console.log("firebase array: ",firebase)

  return (
    <div className='App' >
        <CategoryArrays/>
        <Header/>
        <div style={{display: "flex"}}>
            <SideBar/>
            <Main/>
        </div>
    </div>
  )
}

export default Home