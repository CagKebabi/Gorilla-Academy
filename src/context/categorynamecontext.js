import React from 'react'
import {createContext,useState} from "react"

const CategoryNameContext = createContext()

export const CategoryNameContextProvider = ({children}) => {
  const [categoryName,setCategoryName] = useState("html");
  const [categoryClick,setCategoryClick] = useState(false);
  const [denemes,setDenemes] = useState(false);

  const values = {
    categoryName,setCategoryName,
    categoryClick,setCategoryClick,
    denemes,setDenemes
  }

  return <CategoryNameContext.Provider value={values} >{children}</CategoryNameContext.Provider>
  
}

export default CategoryNameContext