import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import  { dracula }  from '@uiw/codemirror-theme-dracula';
import '../style/codemirror.css'
function App(props) {

  return (
    <>
    <CodeMirror
      value={props.value}
      // minHeight="200px"
      // height="200px"
      width="70%"
      theme={dracula}
      extensions={[javascript({ jsx: true })]}
      onChange={props.onChange}
      id={props.id}
      className={props.className+" "+"codeMirror"}
    />
    {/* <textarea className='codeMirrorTextArea'/> */}
    {/* <TextArea/> */}
    </>
  );
}
export default App;