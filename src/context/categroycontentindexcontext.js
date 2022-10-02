import React from 'react'
import {createContext,useState} from "react"

const CategoryContentIndexeContext = createContext()

export const CategoryContentIndexeContextProvider = ({children}) => {
  const [contentArrayIndex,setContentArrayIndex] = useState([]);
  const [blogArrayIndex,setblogArrayIndex] = useState([]);
  // const [css,setCss] = useState([]);
  // const [javascript,setJavascript] = useState([]);
  // const [react,setReact] = useState([]);
  // const [vue,setVue] = useState([]);
  // const [cplus,setCplus] = useState([]);
  // const [csharp,setCsharp] = useState([]);
  // const [kotlin,setKotlin] = useState([]);
  // const [swift,setSwift] = useState([]);
  // const [sass,setSass] = useState([]);
  // const [bootstrap,setBootstrap] = useState([]);
  // const [firebase,setFirebase] = useState([]);

  const values = {
    contentArrayIndex,setContentArrayIndex,
    blogArrayIndex,setblogArrayIndex
    // css,setCss,
    // javascript,setJavascript,
    // react,setReact,
    // vue,setVue,
    // cplus,setCplus,
    // csharp,setCsharp,
    // kotlin,setKotlin,
    // swift,setSwift,
    // sass,setSass,
    // bootstrap,setBootstrap,
    // firebase,setFirebase,
  }

  return <CategoryContentIndexeContext.Provider value={values} >{children}</CategoryContentIndexeContext.Provider>
  
}

export default CategoryContentIndexeContext