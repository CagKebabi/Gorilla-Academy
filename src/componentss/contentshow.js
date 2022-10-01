import React from 'react'
import Header from './header'
import '../style/contentshow.css'
import gorillaimage from'../media/gorilla.jpg'
import language from '../media/c.png'
import CodeMirrorr from '../componentss/codemirror'
import TextArea from './textarea'
import { useContext,useState,useEffect } from 'react'
import ContentBoxClickContext from "../context/contentboxclickcontext"
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase"
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase'


function ContentShow() {
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
    const {uid,setUid} = useContext(ContentBoxClickContext)
    const [index,setIndex] = useState();
    // const [useruid,setuseruid] = useState("")
    localStorage.setItem('icerikBasligi',icerikBasligi);
    // const useruid = localStorage.getItem("useruid")

    useEffect(() => {
        getDownloadURL(ref(storage, `profileImages/${uid}`))
        .then((url) => {
            const element = document.getElementById('contentShowUserImage')
            element.setAttribute('src',url);
            console.log(url)
        })
        .catch((e) => {
            //alert(e.message)
        })
    },[])
    
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
                    <img src="https://aspnetcoremaster.com/img/csharp.webp" alt="" />
                    <h1>C#</h1>
                </li>
                <li>
                    <button><i class="fa-solid fa-arrow-left"></i>Back</button>
                    <button>Next<i class="fa-solid fa-arrow-right"></i></button>
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
                            <button>
                                <time>1</time>
                            </button>
                            <button>
                                <time>2</time>
                            </button>
                            <button>
                                <time>3</time>
                            </button>
                            <button>
                                <time>4</time>
                            </button>
                            <button>
                                <time>5</time>
                            </button>
                            <button>
                                <time>6</time>
                            </button>
                            <button>
                                <time>7</time>
                            </button>
                            <button>
                                <time>8</time>
                            </button>
                            <button>
                                <time>9</time>
                            </button>
                            <button>
                                <time>10</time>
                            </button>
                            <button>
                                <time>11</time>
                            </button>
                            <button>
                                <time>12</time>
                            </button>
                            <button>
                                <time>13</time>
                            </button>
                            <button>
                                <time>14</time>
                            </button>
                            <button>
                                <time>15</time>
                            </button>
                            <button>
                                <time>16</time>
                            </button>
                            <button>
                                <time>17</time>
                            </button>
                            <button class="today">
                                <time>18</time>
                            </button>
                            <button>
                                <time>19</time>
                            </button>
                            <button>
                                <time>20</time>
                            </button>
                            <button>
                                <time>21</time>
                            </button>
                            <button>
                                <time>22</time>
                            </button>
                            <button>
                                <time>23</time>
                            </button>
                            <button>
                                <time>24</time>
                            </button>
                            <button>
                                <time>25</time>
                            </button>
                            <button>
                                <time>26</time>
                            </button>
                            <button>
                                <time>27</time>
                            </button>
                            <button>
                                <time>28</time>
                            </button>
                            <button>
                                <time>29</time>
                            </button>
                            <button>
                                <time>30</time>
                            </button>
                            <button>
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