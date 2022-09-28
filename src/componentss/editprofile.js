import React from 'react'
import gorillaLogo from '../media/chara06.png'
import gorillaImage from '../media/gorilla.jpg'
import { useContext,useEffect,useState } from "react";
import UserContext from "../context/usernamecontext";
import firebase from 'firebase/compat/app';
import {  setDoc } from "firebase/firestore"; 
import { storage } from "../firebase"
import db from '../firebase'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import {NavLink} from 'react-router-dom';
import '../style/editprofile.css'

function EditProfile() {
    const user = firebase.auth().currentUser;
    const useruid = localStorage.getItem('useruid')

    const {username,setUsername} = useContext(UserContext)
    const {age,setAge} = useContext(UserContext)
    const {country,setCountry} = useContext(UserContext)
    const {github,setGithub} = useContext(UserContext)
    const {linkedin,setLinkedin} = useContext(UserContext)
    const {stackoverflow,setStackoverflow} = useContext(UserContext)
    const {twitter,setTwitter} = useContext(UserContext)
    const {email,setEmail} = useContext(UserContext)

    const [imageUpload,setImageUpload] = useState(null);

    const [username2,setusername2] = useState("Kullanıcı Adı");
    const [age2,setage2] = useState("Yaş");
    const [country2,setcountry2] = useState("Ülke");
    const [github2,setgithub2] = useState("Github");
    const [linkedin2,setlinkedin2] = useState("Linkedin");
    const [twitter2,settwitter2] = useState("Twitter");
    const [stackoverflow2,setstackoverflow2] = useState("Stackoverflow");
    const [job,setjob] = useState("Ünvan")


    useEffect(() => {
        getDoc(doc(db, "users", useruid)).then(docSnap => {
            if (docSnap.exists()) {
              setusername2(docSnap.data().username);
              setage2(docSnap.data().age);
              setcountry2(docSnap.data().country);
              setgithub2(docSnap.data().github);
              setlinkedin2(docSnap.data().linkedin);
              settwitter2(docSnap.data().twitter);
              setstackoverflow2(docSnap.data().stacoverflow)
              setjob(docSnap.data().username);
            } else {
              console.log("No such document!");
              console.log(useruid);
            }
          })
    },[])

    const guncelle = (e) => {
        e.preventDefault()
        setDoc(doc(db,"users",user.uid),{
                uid : user.uid,
                username : username,
                age : age,
                country : country,
                github : github,
                linkedin : linkedin,
                stacoverflow : stackoverflow,
                twitter : twitter,
                email : email
        })
        
    }

    const uploadImage = () => {
        if(imageUpload == null) return;  //Eğer herhangi bir resim yüklenmediyse fonskiyonu çalıştırma demiş olduk
        const imageRef = ref(storage, `profileImages/${useruid}`) //Storage içerisindeki images klasörüne user.uid isminde eklenecek fotoğrafımız
        uploadBytes(imageRef, imageUpload) //ilk parametremize nereye yükleyeceğimizi ikinci parametre ise yükleyeceğimiz resim
        .then((res) => {
            console.log(res)
            //alert('resim yüklendi');
           window.location.reload();
        });
    }

    useEffect(uploadImage,[imageUpload])

    useEffect(() => {
        getDownloadURL(ref(storage, `profileImages/${useruid}`))
        .then((url) => {
            const element = document.getElementById('editProfileProfileImage')
            element.setAttribute('src',url);
            console.log(url)
        })
        .catch((e) => {
            //alert(e.message)
        })
    },[imageUpload])
  return (
    <>
        <div className='editProfilePage' >
            <div className='editProfileLogoContainer' >
                <div>
                    <img src={gorillaLogo} alt="gorilla" />
                    <h1>GORİLLA ACADEMY</h1>
                </div>
            </div>
            <div className='editProfileSetUserContainer' >
                <div className='editProfileSetImageContainer' >
                    <img src={imageUpload} alt="user" id='editProfileProfileImage'  />
                    <div className='editProfileSetImageIcon' >
                        <div>
                            <input type="file" accept='image/*' onChange={(e) => {setImageUpload(e.target.files[0])}} />
                            <i class="fa-solid fa-camera"></i>
                        </div>
                    </div>
                    <h1>User Name</h1>
                    <h2>Backend Software Intern</h2>
                </div>
                <div className='editProfileSetInformationsContainer' >
                    <div>
                        <input type="text"   onChange={(e) => {setUsername(e.target.value)}} placeholder={username2}  />
                        <input type="number" onChange={(e) => {setAge(e.target.value)}} placeholder={age2}/>
                        <input type="text"   onChange={(e) => {setCountry(e.target.value)}}  placeholder={country2} />
                        <input type="email"  onChange={(e) => {setEmail(e.target.value)}} placeholder={job} />
                    </div>
                    <div>
                        <input type="url"  onChange={(e) => {setGithub(e.target.value)}}  placeholder={github2} />
                        <input type="url"  onChange={(e) => {setLinkedin(e.target.value)}}  placeholder={linkedin2} />
                        <input type="url"  onChange={(e) => {setStackoverflow(e.target.value)}}  placeholder={stackoverflow2}/>
                        <input type="url" onChange={(e) => {setTwitter(e.target.value)}}  placeholder={twitter2}/>
                    </div>
                </div>
                <div className='editPorfileSaveButtonContainer' >
                    <button onClick={guncelle} >SAVE</button>
                </div>
            </div>
            <div className='editProfileCloseButtonContainer' >
                <button><NavLink to="/" ><i class="fa-solid fa-xmark"></i></NavLink></button>
            </div>
        </div>
    </>
  )
}

export default EditProfile