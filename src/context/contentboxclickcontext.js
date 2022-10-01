import React from 'react'
import {createContext,useState} from "react"

const ContentBoxClickContext = createContext()

export const ContentBoxClickContextProvider = ({children}) => {
  const [clickIndex,setClickIndex] = useState("")
  const [username,setUserName] = useState("")
  const [userImage,setUserImage] = useState("")
  const [icerikBasligi,setIcerikBasligi] = useState("")
  const [text,setText] = useState("")
  const [codeMirror1,setCodeMirror1] = useState("");
  const [textArea1,setTextArea1] = useState("");
  const [codeMirror2,setCodeMirror2] = useState("");
  const [textArea2,setTextArea2] = useState("");
  const [date,setDate] = useState("");
  const [uid,setUid] = useState("");
  const [icerikKtegorisi,seticerikKtegorisi] = useState("");


  const values = {
    clickIndex,setClickIndex,
    username,setUserName,
    userImage,setUserImage,
    icerikBasligi,setIcerikBasligi,
    text,setText,
    codeMirror1,setCodeMirror1,
    textArea1,setTextArea1,
    codeMirror2,setCodeMirror2,
    textArea2,setTextArea2,
    date,setDate,
    uid,setUid,
    icerikKtegorisi,seticerikKtegorisi
  }

  return <ContentBoxClickContext.Provider value={values} >{children}</ContentBoxClickContext.Provider>
  
}

export default ContentBoxClickContext