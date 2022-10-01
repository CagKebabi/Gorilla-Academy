import React from 'react'
import '../style/maincategories.css'
import db from "../firebase"
import { doc, getDoc } from "firebase/firestore";
import gorillaImage from '../media/chara06.png'
import ContentBox from './contentbox'
import BlogContentBox from './blogcontentbox'
import { useEffect } from 'react'
import { useState } from 'react'
import CategoryNameContext from '../context/categorynamecontext';
import { useContext } from 'react'
import ContentBoxClickContext from "../context/contentboxclickcontext"

import { Outlet } from 'react-router-dom';

import cssLogo from '../media/cssLogo.png'
import htmlLogo from '../media/htmlLogo.png'
import javascriptLogo from '../media/javascriptLogo.png'
import reactLogo from '../media/reactLogo.png'
import bootstrapLogo from '../media/bootstrapLogo.png'
import sassLogo from '../media/sassLogo.png'
import cplusLogo from '../media/c++Logo.png'
import csharpLogo from '../media/csharpLogo.svg'
import firebaseLogo from '../media/firebaseLogo.png'
import vueLogo from '../media/vueLogo.png'
import swiftLogo from '../media/swiftLogo.png'
import kotlinLogo from '../media/kotlinLogo.png'
import { NavLink } from 'react-router-dom'

function MainCategories() {
  const {clickIndex,setClickIndex} = useContext(ContentBoxClickContext);
  const {username,setUserName} = useContext(ContentBoxClickContext);
  const {userImage,setUserImage} = useContext(ContentBoxClickContext);
  const {icerikBasligi,setIcerikBasligi} = useContext(ContentBoxClickContext);
  const {text,setText} = useContext(ContentBoxClickContext);
  const {codeMirror1,setCodeMirror1} = useContext(ContentBoxClickContext);
  const {textArea1,setTextArea1} = useContext(ContentBoxClickContext);
  const {codeMirror2,setCodeMirror2} = useContext(ContentBoxClickContext);
  const {textArea2,setTextArea2} = useContext(ContentBoxClickContext);
  const {date,setDate} = useContext(ContentBoxClickContext);
  const {uid,setUid} = useContext(ContentBoxClickContext);
  const [denemes,setDenemes] = useState([]);

  const [categoryClick,setCategoryClick] = useState(false);
  const {categoryName,setCategoryName} = useContext(CategoryNameContext);


  const fetchAll = (e) => {
      e && e.preventDefault();
      db.collection(categoryName)
      .get()
      .then((snapshot) => {
          if(snapshot.docs.length>0){
              snapshot.docs.forEach((doc) => {
                  setDenemes((prev) => {
                      return [...prev,doc.data()];
                  });
              });
          };
      });
      console.log(denemes)
  };


useEffect(fetchAll,[db]);


const categoryClicked = () => {
  setCategoryClick(true);
  console.log(categoryName);
}

return (
    <>
        <main className='main' >
          <section className='mainCategoriesSection1' >
            <div>
              <Outlet/>
              {/* <div className={categoryClick ? 'categoryPageCategoryContentsContainer' : 'categoryPageCategoryContentsContainerClose'} >
              {
              denemes.map((data,index) => 
              <>
              <NavLink to="contentshow">
                <ContentBox 
                 click={() => {
                  setClickIndex(data.icerikbasligi);
                  setUserName(data.username && data.username);
                  setUserImage(data.imgUrl && data.imgUrl);
                  setIcerikBasligi(data.icerikbasligi && data.icerikbasligi);
                  setText(data.textareacontent1 && data.textareacontent1);
                  setCodeMirror1(data.codemirrorcontent1 && data.codemirrorcontent1);
                  setTextArea1(data.mirrortextareacontent1 && data.mirrortextareacontent1);
                  setCodeMirror2(data.codemirrorcontent2 && data.codemirrorcontent2);
                  setTextArea2(data.mirrortextareacontent2 && data.mirrortextareacontent2);
                  setDate(data.date && data.date);
                  setUid(data.uid && data.uid);
                  
                  console.log(index)
                }} 
                icerikbasligi={data.icerikbasligi} 
                name={data.username}
                date={data.date}/>
                </NavLink>
              </>)
              }
              </div> */}
              {/* <div className={categoryClick ? 'categoryPageCategoryListContainerClose' : 'categoryPageCategoryListContainer'} >
                <div onClick={(e) => {setCategoryClick(true);setCategoryName(e.target.id)}}>                                         
                  <img id='html' src={htmlLogo} alt="" />
                  <h1>HTML</h1>
                </div>
                <div id='css' onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img  src={cssLogo} alt="" />
                  <h1>CSS</h1>
                </div>
                <div  onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img id='javascrıpt' src={javascriptLogo} alt="" />
                  <h1>JAVASCRIPT</h1>
                </div>
                <div  onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img id='react' src={reactLogo} alt="" />
                  <h1>REACT</h1>
                </div>
                <div  onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img id='vue' src={vueLogo} alt="" />
                  <h1>VUE</h1>
                </div>
                <div  onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img id='cplus' src={cplusLogo} alt="" />
                  <h1>C++</h1>
                </div>
                <div  onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img id='csharp' src={csharpLogo} alt="" />
                  <h1>C#</h1>
                </div>
                <div  onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img id='kotlin' src={kotlinLogo} alt="" />
                  <h1>KOTLIN</h1>
                </div>
                <div  onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img id='swift' src={swiftLogo} alt=""/>
                  <h1>SWIFT</h1>
                </div>
                <div  onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img id='sass' src={sassLogo} alt="" />
                  <h1>SASS</h1>
                </div>
                <div  onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img id='bootstrap' src={bootstrapLogo} alt="" onClick={(e) => {categoryClicked(e.target.id)}} />
                  <h1>BOOTSTRAP</h1>
                </div>
                <div  onClick={(e) => {categoryClicked(e.target.id);setCategoryName(e.target.id)}}>
                  <img id='firebase' src={firebaseLogo} alt="" />
                  <h1>FIREBASE</h1>
                </div>
              </div> */}
            </div>
          </section>  
          <section className='mainSection2' >
            <div className='mainSection2TeamsContainer' >
              <div className='mainSection2CreateTeamContainer1' >
                <div className='mainSection2CreateTeamContainer2' >
                  <p>Takım</p>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className='teamsContainerTeamNameContainer' >
                <h1>TechnoSoft Klübü</h1>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className='teamsContainerTeamMembersContainer' >
                <img className='firstChild' src={gorillaImage} alt="" />
                <img src={gorillaImage} alt="" />
                <img src={gorillaImage} alt="" />
                <img src={gorillaImage} alt="" />
                <div className='teamsContainerAddMemberButton'>
                  <button>
                    <i class="fa-light fa-plus"></i>
                  </button>
                </div>
              </div>
              <ul className='teamsContainerTeamFeaturesContainer' >
                <li>
                  <div></div>
                  <h1>Empathize</h1>
                </li>
                <li>
                  <div></div>
                  <h1>Define</h1>
                </li>
                <li>
                  <div></div>
                  <h1>Ideate</h1>
                </li>
                <li>
                  <div></div>
                  <h1>Prototype</h1>
                </li>
                <li>
                  <div></div>
                  <h1>Test</h1>
                </li>
              </ul>
            </div>
            <div className='mainSection2BlogContainer' >
              <div className='blogContentBoxBlogTextContainer' >
                <h1>Blog</h1>
              </div>
              <div className='blogContentBoxRecentTextContainer' >
                <h1>Recent Post</h1>
              </div>
              <div>
                <ul>
                  <BlogContentBox/>
                  <BlogContentBox/>
                  <BlogContentBox/>
                  <BlogContentBox/>
                </ul>
              </div>
              <button className='blogContentBoxGoToAllText' >
                <h1>
                  Go To All
                </h1>
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
           
          </section>   
        </main>
    </>
  )
}

export default MainCategories