import React from 'react'
import { useEffect } from 'react';
import '../style/textarea.css'

function TextArea(props) {
    const heightHandle = () => {
        const element = document.getElementById(props.id)
        element.style.height = "15px";
        element.style.height = (element.scrollHeight)+"px";
        console.log(element.scrollHeight)
        // element.style.height = "15px";
        // element.style.height = (element.scrollHeight)+"px";
    }     


    useEffect(heightHandle,[])

  return (
    <>
        <textarea className={'NewContentTextArea'+" "+props.class} value={props.value} onChange={props.onChange} id={props.id}  onInput={heightHandle}
    />
    </>
  )
}

export default TextArea