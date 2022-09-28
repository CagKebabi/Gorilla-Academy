import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import Register from './register'

function Privateroute2({children}) {
    const [user,setUser] = useState(true)
     useEffect(() => {
        auth.onAuthStateChanged(authuser => {
            authuser ? setUser(authuser) : setUser(null);
            console.log("privaterouteauthuser:",authuser)
        })
     },[])
  return (
    <>
        {!user ? <Register/> : children}
    </>
  )
}

export default Privateroute2