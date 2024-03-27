import React , { useEffect, useRef } from 'react'
import Editor from '@monaco-editor/react';

function Edito({code,setCode}) {

  return (
    <div className='h-full border-4 mt-12 me-2 '> 
      <Editor
      formatOnPaste = "true" 
      defaultLanguage="json"
      defaultValue={code}
      onChange={(val)=>{
        setCode(val)
      }}
    />
    </div>
  )
}

export default Edito;