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


function CreateContent() {
    let [count,setCount] = useState([]);

    const user = firebase.auth().currentUser;
    const userUid = localStorage.getItem('useruid');
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    
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
                console.log(docSnap.data().username)
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
            //alert(e.message)
        })
    },[])

    const yayinla = (e) => {
        e.preventDefault()
        setDoc(doc(db,icerikKategorisiInput.toLocaleLowerCase(),icerikBasligi),{
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
                "date" : day+"."+month+"."+year
            }

        )
        setIcerikBasligi("");
        setCount([]);
        setTextArea("")
    }
  return (
    <div className='App'> 
        <Header2/>
        <div className='createContentContainer' >
            <div className='createContentInputsContainer' >
                <ul>
                    <li>
                        <input type="text" placeholder='İçerik Başlığı' onChange={(e) => {setIcerikBasligi(e.target.value)}} />
                    </li>
                    <li>
                        <select onChange={(e) => {SetIcerikKategorisiInput(e.target.value)}} >
                            <option value="BELIRTILMEDI">Kategori</option>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JAVASCRIPT">JAVASCRIPT</option>
                            <option value="REACT">REACT</option>
                        </select>
                    </li>
                    <li>
                        <button type='submit' onClick={yayinla} >YAYINLA</button>
                    </li>
                    <li>
                        <button>VAZGEÇ</button>
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