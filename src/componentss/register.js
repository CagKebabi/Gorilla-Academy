import React from 'react';
import '../style/register.css';
import gorillaLogo from '../media/chara06.png';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore"; 
import db, { auth } from '../firebase';
import {NavLink} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { useContext } from "react";
import UserContext from "../context/usernamecontext";
import { useState,useEffect } from 'react';
import { async } from '@firebase/util';

function Register() {
    // const [userName,setUserName] = useState("")
    const [emaill,setEmaill] = useState("");
    const [password,setPassword] = useState("");
    const [passworCheck,setPasswordCheck] = useState("");
    const [passwordChecked,setPasswordChecked] = useState(false);
    const auto = {pointerEvents : 'auto'}
    const none = {pointerEvents : 'none'}

    const user = firebase.auth().currentUser;
    const {username,setUsername} = useContext(UserContext)
    const {email,setEmail} = useContext(UserContext)

    const register = async(e) => {
        if (e && e.preventDefault) { e.preventDefault(); }
        const auth = getAuth();

        await createUserWithEmailAndPassword(
            auth,
            emaill.toString(),
            password
        ).then((user) => {
            localStorage.setItem('user',user.user.email);
            localStorage.setItem('useruid',user.user.uid);
        })

        const useruid = localStorage.getItem('useruid')

        await setDoc(doc(db,"users",useruid),{
                uid : useruid,
                username : username,
                email : email
        })
    }
    


    // const guncelle = (e) => {
    //     if (e && e.preventDefault) { e.preventDefault(); }
    //     setDoc(doc(db,"users",user.uid),{
    //             uid : useruid,
    //             username : username,
    //             email : email
    //     })
    // }

    const isPasswordCheckTrue = () => {
        password === passworCheck ? setPasswordChecked(true) : setPasswordChecked(false);
    }
    useEffect(isPasswordCheckTrue,[passworCheck])
    // useEffect(guncelle, [register]);
  return (
    
    <>
        <div className='loginPageContainer1' >
            <div className='loginPageContainer2' >
                <div className='loginPageLogoContainer' >
                    <img src={gorillaLogo} alt="gorilla" />
                    <h1>GORİLLA ACADEMY</h1>
                </div>
                <div className='registerPageInputs' >
                    <form>
                        <input type="text" placeholder='Kullanıcı Adı' onChange={(e) => {setUsername(e.target.value)}} required />
                        <input type="email" placeholder='E-mail' onChange={(e) => {setEmaill(e.target.value);setEmail(e.target.value)}} required />
                        <input type="password" placeholder='Şifre' onChange={(e) => {setPassword(e.target.value)}} required />
                        <input type="password" placeholder='Şifre Tekrar' onChange={(e) => {setPasswordCheck(e.target.value);console.log(passwordChecked)}} required />
                        <button onClick={register} type='submit' className={passwordChecked ? 'pointerAuto' : 'pointerNone'} ><NavLink to="/" ><span>Login</span></NavLink></button>
                    </form>
                </div>
                <div className='loginPageRegister' >
                    <h1>Already have <span>an account?</span></h1>
                    <button><NavLink to="/login" >LOGIN</NavLink></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register