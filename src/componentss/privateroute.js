import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import Login from './login'
import Register from './register'

function Privateroute({children}) {
    const [user,setUser] = useState(true)
     useEffect(() => {
        auth.onAuthStateChanged(authuser => {
            authuser ? setUser(authuser) : setUser(null);
            console.log("privaterouteauthuser:",authuser)
        })
     },[])
  return (
    <>
        {!user ? <Login/> : children}
    </>
  )
}

export default Privateroute