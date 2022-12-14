import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import ContentBox from './contentbox'
import ContentBoxClickContext from "../context/contentboxclickcontext"
import { useContext,useState } from 'react';
import db from '../firebase';
import CategoryNameContext from '../context/categorynamecontext';
import CategoryContentIndexeContext from '../context/categroycontentindexcontext';
import BlogContentBox from './blogcontentbox';
import BlogContentBox2 from './blogcontentbox2';
import gorillaImage from '../media/chara06.png'
import '../style/mainblog.css'

function CategoriesContentList() {
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
    const {icerikKtegorisi,seticerikKtegorisi} = useContext(ContentBoxClickContext);

    const [denemes,setDenemes] = useState("")
    const [blogContents,setBlogContents] = useState([])

    const {blogArrayIndex,setblogArrayIndex} = useContext(CategoryContentIndexeContext);//



    const fetchAll = (e) => {
        e && e.preventDefault();
        db.collection("blog")
        .get()
        .then((snapshot) => {
          setblogArrayIndex([])
            if(snapshot.docs.length>0){
                snapshot.docs.forEach((doc) => {
                    setDenemes((prev) => {
                        return [...prev,doc.data()];
                    });
                    setblogArrayIndex((prev) => {
                      return [...prev,doc.data().icerikbasligi]
                    })
                });
            };
        });
        console.log(denemes)
    };
  
  
  useEffect(fetchAll,[]);
  

    const fetchAllBlog = (e) => {
      e && e.preventDefault();
      db.collection("blog")
      .get()
      .then((snapshot) => {
          if(snapshot.docs.length>0){
              snapshot.docs.forEach((doc) => {
                  setBlogContents((prev) => {
                      return [...prev,doc.data()];
                  });
              });
          };
      });
      console.log(denemes)
    };
  
  
  useEffect(fetchAllBlog,[]);

  return (
    <>
        <main className='main' >
          <section className='mainCategoriesSection1' >
            <div>
              <ul className='blogPageBlogContentsContainer' >
              {
              denemes && denemes.map((data,index) => 
              <>
              {/* <NavLink to="contentshow" className="blogPageContentBoxContainer"> */}
                <BlogContentBox2 
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
                  seticerikKtegorisi(data.icerikKtegorisi && data.icerikKtegorisi)
                  console.log(index)
                }} 
                userimage={data.imgUrl}
                icerikbasligi={data.icerikbasligi} 
                name={data.username}
                date={data.date}/>
                {/* </NavLink> */}
                {/* <BlogContentBox2/> */}
              </>)
              }
              </ul>
            </div>
          </section>  
          <section className='mainSection2' >
            <div className='mainSection2TeamsContainer' >
              <div className='mainSection2CreateTeamContainer1' >
                <div className='mainSection2CreateTeamContainer2' >
                  <p>Tak??m</p>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className='teamsContainerTeamNameContainer' >
                <h1>TechnoSoft Kl??b??</h1>
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
              {
              blogContents && blogContents.map((data,index) => 
              <>
              {/* <NavLink to="contentshow" className="blogPageContentBoxContainer"> */}
                <BlogContentBox 
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
                userimage={data.imgUrl}
                icerikbasligi={data.icerikbasligi} 
                name={data.username}
                date={data.date}/>
                {/* </NavLink> */}
                {/* <BlogContentBox2/> */}
              </>)
              }
                </ul>
              </div>
              <button className='blogContentBoxGoToAllText' >
                <h1>
                  <NavLink to="/blog">
                  Go To All
                  </NavLink>
                </h1>
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
           
          </section>   
        </main>
    </>
  );
}
export default CategoriesContentList;