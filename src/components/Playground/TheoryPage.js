import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaCopy } from "react-icons/fa";

function TheoryPage({desc}) {
  return (<div className='bg-zinc-700 text-white min-h-full pt-3 px-3 border-2 border-e-0 border-gray-700 '>
    <h1 className={` text-4xl font-semibold mb-6 ps-3 ${desc.pageType === "Question" ? "" : "underline underline-offset-4 text-center" }`}>{desc.title}</h1>
    {
     (desc.content).map((elem,index)=>{
        if(elem.type === "description"){
            return <div key={index} className='my-2 text-xl p-3'>{elem.content}</div>
        }
        if(elem.type === "Code"){
            return (
                <div className='' key={index}>
                    <div className='absolute right-4 text-xs '><FaCopy/></div>
                    <SyntaxHighlighter 
                        language="JSON"
                        customStyle={{
                            width:"auto"
                        }}
                        style={atomOneDark} 
                        showLineNumbers="true"
                    >
                    {elem.content}
                    </SyntaxHighlighter>
                </div>
            ) 
        }
        if(elem.type === "Examples"){
            return (<div>
                {
                  (elem.content).map(({input,output,explaination},index)=>{
                    if(typeof input === "object"){
                      input = JSON.stringify(input);
                    } 
                    return (
                      <div key={index} className='my-2'>
                        <div className='font-bold mb-2'>Example {index+1} : </div>
                        <div className='border-l-4 border-slate-500  ps-5 ms-4 pt-1'><span className='font-bold'>Input: </span> {input}</div>
                        <div className='border-l-4 border-slate-500  ps-5 ms-4 pt-1'><span className='font-bold'>Output:</span> {output} </div>
                        {
                          (explaination === undefined) ? null : (
                            <div className='border-l-4 border-slate-500  ps-5 ms-4 pt-1'><span className='font-bold'>Explaination:</span> {explaination} </div>
                          )
                        }
                      </div>
                    )
                  })
                }
            </div>
            );
        }
        return null; // will change after defining all the possible formats, yes data loss ik
     })   
    }
</div>
  )
}

export default TheoryPage;