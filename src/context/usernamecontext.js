import React from "react";
import { createContext, useState } from "react";

const UserContext = createContext();

export const UserNameProvider = ({children}) => {
    const [username,setUsername] = useState("")
    const [age,setAge] = useState("")
    const [country,setCountry] = useState("")
    const [github,setGithub] = useState("")
    const [linkedin,setLinkedin] = useState("")
    const [stackoverflow,setStackoverflow] = useState("")
    const [twitter,setTwitter] = useState("")
    const [email,setEmail] = useState("")
    const [unvan,setUnvan] = useState("")

    const values = {
        username,setUsername,
        age,setAge,
        country,setCountry,
        github,setGithub,
        linkedin,setLinkedin,
        stackoverflow,setStackoverflow,
        twitter,setTwitter,
        email,setEmail,
        unvan,setUnvan
    };
        return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContext;