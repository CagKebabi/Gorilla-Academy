import React from 'react'
import {createContext,useState} from "react"

const ContentContext = createContext()

export const ContentContextProvider = ({children}) => {
  const [icerikBasligi,setIcerikBasligi] = useState("saxasxaxasx")
  const [icerikKategorisi,SetIcerikKategorisi] = useState("ajknkscaıuojınksckhıfojadk")

  const values = {
    icerikBasligi,setIcerikBasligi,
    icerikKategorisi,SetIcerikKategorisi
  }

  return <ContentContext.Provider value={values} >{children}</ContentContext.Provider>
  
}

export default ContentContext