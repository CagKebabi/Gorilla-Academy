import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import ContentBox from './contentbox'
import ContentBoxClickContext from "../context/contentboxclickcontext"
import CategoryContentIndexeContext from '../context/categroycontentindexcontext';
import { useContext,useState } from 'react';
import db from '../firebase';
import CategoryNameContext from '../context/categorynamecontext';
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

    const {categoryName,setCategoryName} = useContext(CategoryNameContext);
    const categoryImage = [htmlLogo,cssLogo,javascriptLogo,reactLogo,vueLogo,cplusLogo,csharpLogo,kotlinLogo,swiftLogo,sassLogo,bootstrapLogo,firebaseLogo];
    const categoryNamee = ["html","css","javascrıpt","react","vue","cplus","csharp","kotlin","swift","sass","bootstrap","firebase"];
    const categoryName2 = ["html","css","javascript","react","vue","c++","c#","kotlin","swift","sass","bootstrap","firebase"];


    const {contentArrayIndex,setContentArrayIndex} = useContext(CategoryContentIndexeContext);//


    const fetchAll = (e) => {
        e && e.preventDefault();
        db.collection(categoryName)
        .get()
        .then((snapshot) => {
          setContentArrayIndex([])
            if(snapshot.docs.length>0){
                snapshot.docs.forEach((doc) => {
                    setDenemes((prev) => {
                        return [...prev,doc.data()];
                    });
                    setContentArrayIndex((prev) => {
                      return [...prev,doc.data().icerikbasligi]
                    })
                });
            };
        });
        console.log("bu content array indexi",contentArrayIndex)
    };
  
  
  useEffect(fetchAll,[]);
  console.log(categoryName)

  return (
    <>
      {/* <div className={categoryClick ? 'categoryPageCategoryContentsContainer' : 'categoryPageCategoryContentsContainerClose'} > */}
      <div className='categoryPageCategoryContentsContainer' >
              {
              denemes && denemes.map((data,index) => 
              <>
              <NavLink to="/contentshow">
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
                  seticerikKtegorisi(data.icerikKtegorisi && data.icerikKtegorisi)
                  
                  console.log(index)
                }} 
                categoryimage={categoryImage[categoryNamee.indexOf(data.icerikKtegorisi)]}
                icerikkategorisi = {categoryName2[categoryNamee.indexOf(data.icerikKtegorisi)]}
                icerikbasligi={data.icerikbasligi} 
                name={data.username}
                date={data.date}/>
                </NavLink>
              </>)
              }
              </div>
    </>
  );
}
export default CategoriesContentList;