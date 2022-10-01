import React from 'react'
import Header2 from './header2'
import '../style/createcontent.css'
import db from '../firebase';
import firebase from 'firebase/compat/app';
import { useState,useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore'
import TextArea from './textarea';
import CodeMirrorr from '../componentss/codemirror'
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase"
import {NavLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateContent() {
    let [count,setCount] = useState([]);

    const user = firebase.auth().currentUser;
    const userUid = localStorage.getItem('useruid');
    const date = new Date().toLocaleDateString();


    const [username,setUserName] = useState()
    const [icerikBasligi,setIcerikBasligi] = useState("");
    const [icerikKategorisiInput,SetIcerikKategorisiInput] = useState("");
    const [textArea,setTextArea] = useState("")
    const [imageUrl,setImageUrl] = useState("")
    const [imageUpload,setImageUpload] = useState(null)

    const codemirrorContent = ["","","","",""]
    const textareaContent = ["","","","",""]

    useEffect(() => {
        getDoc(doc(db, "users", userUid)).then(docSnap => {
            if (docSnap.exists()) {
                setUserName(docSnap.data().username);
                console.log(docSnap.data().username);
            } else {
              console.log("No such document!");
            }
          })
    },[]);

    useEffect(() => {
        getDownloadURL(ref(storage, `profileImages/${userUid}`))
        .then((url) => {
            // const element = document.getElementById('contentShowUserImage')
            // element.setAttribute('src',url);
            // console.log(url)
            setImageUrl(url)
        })
        .catch((e) => {
            // console.log(day+"."+month+"."+year)
        })
    },[])


    useEffect(() => {
        if(userUid === "XPacZJioH5OI3NnCFjfEj1vIiN13") {
            document.getElementById('blogCategoryBox').style.display = "block"
        }
    })
    const yayinla = (e) => {
        e && e.preventDefault()
        setDoc(doc(db,icerikKategorisiInput,icerikBasligi),{
                "username" : username,
                "uid" : user.uid,
                "icerikbasligi" : icerikBasligi,
                "icerikKtegorisi": icerikKategorisiInput,
                "textareacontent1" : textArea,
                "codemirrorcontent1" : codemirrorContent[0],
                "mirrortextareacontent1" : textareaContent[0],
                "codemirrorcontent2" : codemirrorContent[1],
                "mirrortextareacontent2" : textareaContent[1],
                "codemirrorcontent3" : codemirrorContent[2],
                "mirrortextareacontent3" : textareaContent[2],
                "codemirrorcontent4" : codemirrorContent[3],
                "mirrortextareacontent4" : textareaContent[3],
                "imgUrl" : imageUrl,
                "date" : date
            }

        )
        setIcerikBasligi("");
        setCount([]);
        setTextArea("")
    }


    const notify = () => toast.success('İçerik Yayınlandı ✍🏻', {
        position: "top-right",
        theme: "colored",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });;

  return (
    <div className='App'> 
        <Header2/>
        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        <div className='createContentContainer' >
            <div className='createContentInputsContainer' >
                <ul>
                    <li>
                        <input type="text" placeholder='İçerik Başlığı' onChange={(e) => {setIcerikBasligi(e.target.value)}} />
                    </li>
                    <li>
                        <select onChange={(e) => {SetIcerikKategorisiInput(e.target.value);console.log(icerikKategorisiInput)}} >
                            <option value="BELIRTILMEDI">Kategori</option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="javascrıpt">JAVASCRIPT</option>
                            <option value="react">REACT</option>
                            <option value="vue">VUE</option>
                            <option value="cplus">C++</option>
                            <option value="csharp">C#</option>
                            <option value="kotlin">KOTLIN</option>
                            <option value="swift">SWIFT</option>
                            <option value="sass">SASS</option>
                            <option value="bootstrap">BOOTSTRAP</option>
                            <option value="firebase">FIREBASE</option>
                            <option value="blog" id='blogCategoryBox' style={{display:"none"}} >BLOG</option>
                        </select>
                    </li>
                    <li>
                        <button type='submit' onClick={() => {yayinla();notify()}} >YAYINLA</button>
                    </li>
                    <li>
                        <button><NavLink to="/" >VAZGEÇ</NavLink></button>
                    </li>
                </ul>
            </div>
            <div className='createContentContentContainer' >
                <div className='codemirrorButtons' >
                    <button onClick={() => {
                                setCount([...count,"ekle"]);
                    }}><i class="fa-solid fa-plus"></i></button>
                    <button onClick={() => {
                                count.pop()
                                setCount([...count])
                    }} ><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className='conntentArea' >
                    <div>
                        <TextArea id="deneme" onChange={(e) => {setTextArea(e.target.value);console.log(textArea)}} value={textArea} />
                       {
                        count.map((data,index) => 
                            <div key={index}>
                                <CodeMirrorr 
                                    value={codemirrorContent[index]} 
                                    className={"codeMirrorClass"+index}
                                    id={"NewContentTextArea"} 
                                    onChange={(e) => {
                                        codemirrorContent[index]=e;
                                        console.log(codemirrorContent[index])
                                    }} />
                                <TextArea 
                                    // value={textareaContent[index]} 
                                    class={"NewContentTextArea"} 
                                    onChange={(e) => {
                                        textareaContent[index] = e.target.value;
                                        console.log(textareaContent[index])
                                    }}
                                    id={"textarea"+index}  />
                            </div>
                    )
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateContent