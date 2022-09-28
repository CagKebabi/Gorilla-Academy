import React from 'react'
import '../style/login.css'
import gorillaLogo from '../media/chara06.png'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from 'react'
import {NavLink} from 'react-router-dom'

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const kayitol = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then((user) => {
            // setUserName(user.auth().currentUser.email)
            localStorage.setItem('user',user.user.email);
            localStorage.setItem('useruid',user.user.uid);
        })
        // await setCustomUserClaims(user, {role: "admin"})
        // await updateProfile(user, {
        //     displayName: username,
        // }) 
    }

    const login = e => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then((user) => {
            // setUserName(user.auth().currentUser.email)
            console.log(user)
            localStorage.setItem('user',user.user.email);
            localStorage.setItem('useruid',user.user.uid);
        })
    }
  return (
    <>
        <div className='loginPageContainer1' >
            <div className='loginPageContainer2' >
                <div className='loginPageLogoContainer' >
                    <img src={gorillaLogo} alt="gorilla" />
                    <h1>GORİLLA ACADEMY</h1>
                </div>
                <div className='loginPageInputs' >
                    <form>
                        <input onChange={(e) => {setEmail(e.target.value)}} type="email" required value={email} placeholder="User Name" />
                        <input onChange={(e) => {setPassword(e.target.value)}} type="password" required value={password} placeholder="Password" />
                        <button onClick={login} ><span>Login</span></button>
                    </form>
                </div>
                <div className='loginPageRegister' >
                    <h1>Don't you have a <span>membership</span></h1>
                    <button><NavLink to="/register" >REGISTER</NavLink></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login