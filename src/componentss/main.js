import React from 'react'
import '../style/main.css'
import db from "../firebase"
import gorillaImage from '../media/chara06.png'
import ContentBox from './contentbox'
import BlogContentBox from './blogcontentbox'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import ContentBoxClickContext from "../context/contentboxclickcontext"
import { NavLink } from 'react-router-dom'

function Main() {
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

  const fetchAll = (e) => {
      e && e.preventDefault();
      db.collection('html')
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

const heightHandle = () => {
  const element = document.getElementById('contentBoxSection');
  // element.style.height = "15px";
  element.style.height = (element.scrollHeight)+"px";
}

  return (
    <>
        <main className='main' >
          <section className='mainSection1' >
          <div className='mainSection1WelcomeImageSide' >
            <div>
            <img src={gorillaImage} alt="" />
            </div>
          </div>
            <div className='mainSection1WelcomeContainer' >
              <div className='mainSection1WelcomeUserSide' >
                <div className='mainSection1WelcomeTextContainer' >
                  <h1>Hi Sedat Taylan!</h1>
                  <h2>Welcome home! The environment is fine for you</h2>
                  <h3>You can work.</h3>
                </div>
                <div className='mainSection1WelcomeIconContainer' >
                  <div>
                    <i class="fa-brands fa-github WelcomeIcon1"></i>
                    <i class="fa-brands fa-stack-overflow WelcomeIcon2"></i>
                    <i class="fa-brands fa-twitter WelcomeIcon3 "></i>
                    <i class="fa-brands fa-linkedin-in WelcomeIcon4 "></i>
                  </div>
                </div>
              </div>
            </div>

            <div className='mainSection1LastUploadedContainer' >
              <div className='mainSection1LastUploadedText' >
                <h1>Last uploaded</h1>
              </div>
              <div className='mainSection1LastUploadedTitles' >
                <div className='productTextDiv' >PRODUCT</div>
                <div>CATEGORY</div>
                <div>ORDER STATUS</div>
                <div>ACTIONS</div>
              </div>
            </div>
            <div>
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

export default Main