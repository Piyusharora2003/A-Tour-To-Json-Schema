import React  from 'react'
import Editor from '@monaco-editor/react';

function Edito({code,setCode}) {

  return (
    <div className='h-3/4 w-98p '>
      <Editor
      formatOnPaste = "true" 
      theme='vs-dark'
      defaultLanguage="json"
      defaultValue='{
  "$schema": "https://json-schema.org/draft/2020-12/schema"
}'
      onMount={setCode}
    />
    </div>
  )
}

export default Edito;