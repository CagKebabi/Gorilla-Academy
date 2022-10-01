import React from 'react';
import '../style/codemirror.css'
import cssLogo from '../media/cssLogo.png'
import htmlLogo from '../media/htmlLogo.png'
import javascriptLogo from '../media/javascriptLogo.png'
import reactLogo from '../media/reactLogo.png'
import bootstrapLogo from '../media/bootstrapLogo.png'
import sassLogo from '../media/sassLogo.png'
import cplusLogo from '../media/c++Logo.png'
import csharpLogo from '../media/csharpLogo.svg'
import firebaseLogo from '../media/firebaseLogo.png'
import vueLogo from '../media/vueLogo.png'
import swiftLogo from '../media/swiftLogo.png'
import kotlinLogo from '../media/kotlinLogo.png'
import { useContext } from 'react';
import CategoryNameContext from '../context/categorynamecontext';
import { NavLink } from 'react-router-dom'

function CategoriesList(props) {
    const {categoryName,setCategoryName} = useContext(CategoryNameContext);
    // const {categoryClick,setCategoryClick} = useContext(CategoryNameContext);


    console.log(categoryName)
  return (
    <>
            {/* <div className={categoryClick ? 'categoryPageCategoryListContainerClose' : 'categoryPageCategoryListContainer'} > */}
            <div className='categoryPageCategoryListContainer' >
                <div onClick={() => {setCategoryName('html')}}> 
                    <NavLink to="/categories/contents" >                                        
                        <img id='html' src={htmlLogo} alt="" />
                        <h1>HTML</h1>
                    </NavLink>
                </div>
                <div id='css' onClick={(e) => {setCategoryName('css')}}>
                    <NavLink to="/categories/contents">
                        <img  src={cssLogo} alt="" />
                        <h1>CSS</h1>
                    </NavLink>
                </div>
                <div  onClick={(e) => {setCategoryName('javascrıpt')}}>
                    <NavLink to="/categories/contents" >
                        <img id='javascrıpt' src={javascriptLogo} alt="" />
                        <h1>JAVASCRIPT</h1>
                    </NavLink>
                </div>
                <div  onClick={(e) => {setCategoryName('react')}}>
                    <NavLink to="/categories/contents" >
                        <img id='react' src={reactLogo} alt="" />
                        <h1>REACT</h1>
                    </NavLink>
                </div>
                <div  onClick={(e) => {setCategoryName('vue')}}>
                    <NavLink to="/categories/contents" >
                        <img id='vue' src={vueLogo} alt="" />
                        <h1> VUE</h1>
                    </NavLink>
                </div>
                <div  onClick={(e) => {setCategoryName('cplus')}}>
                    <NavLink to="/categories/contents" >
                        <img id='cplus' src={cplusLogo} alt="" />
                        <h1>C++</h1>
                    </NavLink>
                </div>
                <div  onClick={(e) => {setCategoryName('csharp')}}>
                    <NavLink to="/categories/contents" >
                        <img id='csharp' src={csharpLogo} alt="" />
                        <h1>C#</h1>
                    </NavLink>
                </div>
                <div  onClick={(e) => {setCategoryName('kotlin')}}>
                    <NavLink to="/categories/contents" >
                        <img id='kotlin' src={kotlinLogo} alt="" />
                        <h1>KOTLIN</h1>
                    </NavLink>
                </div>
                <div  onClick={(e) => {setCategoryName('swift')}}>
                    <NavLink to="/categories/contents" >
                        <img id='swift' src={swiftLogo} alt=""/>
                        <h1>SWIFT</h1>
                    </NavLink>
                </div>
                <div  onClick={(e) => {setCategoryName('sass')}}>
                    <NavLink to="/categories/contents" >
                        <img id='sass' src={sassLogo} alt="" />
                        <h1>SASS</h1>
                    </NavLink>
                </div>
                <div  onClick={(e) => {setCategoryName('bootstrap')}}>
                    <NavLink to="/categories/contents" >
                        <img id='bootstrap' src={bootstrapLogo} alt="" />
                        <h1>BOOTSTRAP</h1>                
                    </NavLink>
                </div>
                <div  onClick={(e) => {setCategoryName('firebase')}}>
                    <NavLink to="/categories/contents" >
                        <img id='firebase' src={firebaseLogo} alt="" />
                        <h1>FIREBASE</h1>
                    </NavLink>
                </div>
              </div>
    </>
  );
}
export default CategoriesList;