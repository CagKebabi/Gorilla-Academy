import React from 'react'
import Header from './header'
import '../style/contentshow.css'
import gorillaimage from'../media/gorilla.jpg'
import CodeMirrorr from '../componentss/codemirror'
import TextArea from './textarea'
import { useContext,useState,useEffect } from 'react'
import ContentBoxClickContext from "../context/contentboxclickcontext"
import CategoryContentIndexeContext from '../context/categroycontentindexcontext'
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase"
import { doc, getDoc } from "firebase/firestore";
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
import db from "../firebase"


function ContentShow() {
    const {contentArrayIndex,setContentArrayIndex} = useContext(CategoryContentIndexeContext);
    const {blogArrayIndex,setblogArrayIndex} = useContext(CategoryContentIndexeContext);////////////

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
    const [index,setIndex] = useState();

    const categoryImage = [htmlLogo,cssLogo,javascriptLogo,reactLogo,vueLogo,cplusLogo,csharpLogo,kotlinLogo,swiftLogo,sassLogo,bootstrapLogo,firebaseLogo];
    const categoryName = ["html","css","javascrıpt","react","vue","cplus","csharp","kotlin","swift","sass","bootstrap","firebase"];
    const categoryName2 = ["html","css","javascript","react","vue","c++","c#","kotlin","swift","sass","bootstrap","firebase"];
    const [category,setCategory] = useState("");
    const [image,setImage] = useState()

    localStorage.setItem('icerikBasligi',icerikBasligi);
    localStorage.setItem('contentArrayLS',contentArrayIndex);
    localStorage.setItem('icerikKategori2',contentArrayIndex);
    let budur = [localStorage.getItem('contentArrayLS',contentArrayIndex)];
    let budur2 = [localStorage.getItem('contentArrayLS',icerikKtegorisi)];

    const [name,setname] = useState("")
  

    const [count,setCount] = useState(icerikKtegorisi == "blog" ? blogArrayIndex.indexOf(icerikBasligi) : contentArrayIndex.indexOf(icerikBasligi))


        // const [count,setCount] = useState(blogArrayIndex.indexOf(icerikBasligi))


    const countIncrease = () => {
        let category = icerikKtegorisi == "blog" ? blogArrayIndex : contentArrayIndex;
        setCount(count < category.length-1 ? count+1 : 0);
        console.log(count);
        // console.log(contentArrayIndex[count]);
        // // console.log(username,text);
        // console.log(contentArrayIndex);

    }

    const countDecrease = () => {
        let category = icerikKtegorisi == "blog" ? blogArrayIndex : contentArrayIndex;
        setCount(count > 0 ? count-1 : category.length-1);
        console.log(count);
        // console.log(contentArrayIndex[count]);
        // console.log(username,text)
    }


    useEffect(() => {
        getDoc(doc(db, icerikKtegorisi, icerikKtegorisi=="blog" ? blogArrayIndex[count] : contentArrayIndex[count] )).then(docSnap => {
            // getDoc(doc(db, icerikKtegorisi, blogArrayIndex[count])).then(docSnap => {
            console.log("BLOG COUNT",blogArrayIndex[count]);
            console.log("BLOG COUNT",contentArrayIndex[count]);
            if (docSnap.exists()) {
              setUserName(docSnap.data().username && docSnap.data().username);
              setIcerikBasligi(docSnap.data().icerikbasligi && docSnap.data().icerikbasligi)
              setText(docSnap.data().textareacontent1 && docSnap.data().textareacontent1);
              setCodeMirror1(docSnap.data().codemirrorcontent1 && docSnap.data().codemirrorcontent1);
              setTextArea1(docSnap.data().mirrortextareacontent1 && docSnap.data().mirrortextareacontent1);
              setCodeMirror2(docSnap.data().codemirrorcontent2 && docSnap.data().codemirrorcontent2);
              setTextArea2(docSnap.data().mirrortextareacontent2 && docSnap.data().mirrortextareacontent2);
              setDate(docSnap.data().date && docSnap.data().date);
              setUid(docSnap.data().uid && docSnap.data().uid);
            //   seticerikKtegorisi(docSnap.data().icerikKtegorisi && docSnap.data().icerikKtegorisi)
            } else {
 
            }
          })
    },[count])

  
//   useEffect(fetchAll,[db]);
useEffect(() => {
    getDownloadURL(ref(storage, `profileImages/${uid}`))
    .then((url) => {
        const element = document.getElementById('contentShowUserImage')
        element.setAttribute('src',url);
        // console.log(url)
        console.log(date)
    })
    .catch((e) => {
        //alert(e.message)
    })
},[uid]);


// useEffect(() => {
//     getDoc(doc(db, "users", uid)).then(docSnap => {
//         if (docSnap.exists()) {
//           setname(docSnap.data().username);
//         } else {
//           console.log("No such document!");
//         //   console.log(useruid);
//         }
//       })
// },[count])
  

      useEffect(() => {
        setImage(categoryImage[categoryName.indexOf(icerikKtegorisi)] && categoryImage[categoryName.indexOf(icerikKtegorisi)]);
        setCategory(categoryName2[categoryName.indexOf(icerikKtegorisi)] && categoryName2[categoryName.indexOf(icerikKtegorisi)]);
    },[])

    // const [calendarIndex,setCalendarIndex] = useState([])

    // useEffect(() => {
    //     const day = date.slice(0,2);
    //     const element = document.getElementById(`calendarDay${day}`);
    //     element.style.backgroundColor = "#fff";
    //     element.style.backgroundColor = "#5d4cc6";
    //     element.style.color = "#fff";
    //     console.log(date)
    // },[date])

    const [isOnClicked,setIsOnClicked] = useState([]);
    let deneme = [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
  
    const navigationsHandle = () => {
      deneme = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
      deneme[date.slice(0,2)-1] = true;
      setIsOnClicked(deneme)
      console.log(deneme)
    }

    useEffect(navigationsHandle,[date])
    
  return (
    <div className='App'> 
    <Header/>
    <div className='contentShowContainer' >
        <div className='createContentInputsContainer' >
            <ul>
                <li>
                    <img src={gorillaimage} alt="" id='contentShowUserImage' />
                    <h1>{username}</h1>
                </li>
                <li>
                    <h1>{icerikBasligi}</h1>
                    <h2>{date}</h2>
                </li>
                <li>
                    <img src={image} alt="" />
                    <h1>{category}</h1>
                </li>
                <li>
                    <button onClick={countDecrease}><i class="fa-solid fa-arrow-left"></i>Back</button>
                    <button onClick={countIncrease}>Next<i class="fa-solid fa-arrow-right"></i></button>
                </li>
                <li></li>
                <li>
                    <div class="calendar">
                        <div class="days">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                        </div>
                        <div class="dates">
                            <button id='calendarDay01' className={isOnClicked[0] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>1</time>
                            </button>
                            <button id='calendarDay02' className={isOnClicked[1] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>2</time>
                            </button>
                            <button id='calendarDay03' className={isOnClicked[2] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>3</time>
                            </button>
                            <button id='calendarDay04' className={isOnClicked[3] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>4</time>
                            </button>
                            <button id='calendarDay05' className={isOnClicked[4] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>5</time>
                            </button>
                            <button id='calendarDay06' className={isOnClicked[5] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>6</time>
                            </button>
                            <button id='calendarDay07' className={isOnClicked[6] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>7</time>
                            </button>
                            <button id='calendarDay08' className={isOnClicked[7] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>8</time>
                            </button>
                            <button id='calendarDay09' className={isOnClicked[8] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>9</time>
                            </button>
                            <button id='calendarDay10' className={isOnClicked[9] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>10</time>
                            </button>
                            <button id='calendarDay11' className={isOnClicked[10] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>11</time>
                            </button>
                            <button id='calendarDay12' className={isOnClicked[11] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>12</time>
                            </button>
                            <button id='calendarDay13' className={isOnClicked[12] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>13</time>
                            </button>
                            <button id='calendarDay14' className={isOnClicked[13] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>14</time>
                            </button>
                            <button id='calendarDay15' className={isOnClicked[14] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>15</time>
                            </button>
                            <button id='calendarDay16' className={isOnClicked[15] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>16</time>
                            </button>
                            <button id='calendarDay17' className={isOnClicked[16] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>17</time>
                            </button>
                            <button id='calendarDay18' className={isOnClicked[17] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>18</time>
                            </button>
                            <button id='calendarDay19' className={isOnClicked[18] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>19</time>
                            </button>
                            <button id='calendarDay20' className={isOnClicked[19] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>20</time>
                            </button>
                            <button id='calendarDay21' className={isOnClicked[20] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>21</time>
                            </button>
                            <button id='calendarDay22' className={isOnClicked[21] ? 'contentShowButtonActive' : 'contentShowButtonClose'}> 
                                <time>22</time>
                            </button>
                            <button id='calendarDay23' className={isOnClicked[22] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>23</time>
                            </button>
                            <button id='calendarDay24' className={isOnClicked[23] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>24</time>
                            </button>
                            <button id='calendarDay25' className={isOnClicked[24] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>25</time>
                            </button>
                            <button id='calendarDay26' className={isOnClicked[25] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>26</time>
                            </button>
                            <button id='calendarDay27' className={isOnClicked[26] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>27</time>
                            </button>
                            <button id='calendarDay28' className={isOnClicked[27] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>28</time>
                            </button>
                            <button id='calendarDay29' className={isOnClicked[28] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>29</time>
                            </button>
                            <button id='calendarDay30' className={isOnClicked[29] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>30</time>
                            </button>
                            <button id='calendarDay31' className={isOnClicked[30] ? 'contentShowButtonActive' : 'contentShowButtonClose'}>
                                <time>31</time>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className='showContentContainer' >
            <div>
            {
                text.length > 0 ?
                <TextArea 
                id={"textarea"}
                value={text}
                />
                :
                ""
              }
               {codeMirror1.length>0 
                ?   
                <div className='showPageCodeMirrorContainer1 contentShowPageCodeMirrorTextAreaConteiners' >
                <CodeMirrorr 
                value={codeMirror1} 
                className={"codeMirrorClass"+index}
                id={"codemirrorid1"} 
                /> 
                </div> 
                : 
                ""
              }
              {  
                textArea1.length > 0 ?
                <div className='contentShowPageTextArea1 contentShowPageCodeMirrorTextAreaConteiners' >
                <TextArea 
                value={textArea1} 
                class={"textAreaClass"+index} 
                onChange={(e) => {
                  console.log('textarea1')
                }}
                id={"textarea1"}  />
                </div>
                :
                ""
              }
              {codeMirror2.length>0 
                ?   
                <div className='showPageCodeMirrorContainer2 contentShowPageCodeMirrorTextAreaConteiners' >
                <CodeMirrorr 
                value={codeMirror2} 
                className={"codeMirrorClass"+index}
                id={"codemirrorid2"} 
                /> 
                </div> 
                : 
                ""
              }
              {
                textArea2.length > 0 ?
                <div className='contentShowPageTextArea2 contentShowPageCodeMirrorTextAreaConteiners' >
                <TextArea 
                value={textArea2} 
                class={"textAreaClass"+index} 
                onChange={(e) => {
                  console.log('textarea1')
                }}
                id={"textarea2"}  />
                </div>
                :
                ""
              }
                {/* <CodeMirrorr/>
                <TextArea id="deneme" /> */}
            </div>
        </div>
    </div>
</div>
  )
}

export default ContentShow