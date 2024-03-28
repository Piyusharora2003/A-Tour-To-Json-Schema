import React,{useRef} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { registerSchema, unregisterSchema, validate } from "@hyperjump/json-schema/draft-2020-12";
import { newPages, pages } from '../../Problems.js';

import Navbar from '../Navbar/Navbar.js';
import Edito from "./Editor.js"
import TheoryPage from './TheoryPage.js';
import Sidebar from '../Sidebar/Sidebar.js';


// @description:
//  Checks for any syntaxical error if error return syntax error else return (all tc's not cleared return wrong tc else navigate to next page)  
async function RunUserSchema(schema,testCases,moveToNextPage){
    // Register the schema
    try {
        registerSchema(JSON.parse(schema),"http://example.com/schemas/st");
        const checkfn = await validate("http://example.com/schemas/st");

        for(let i in testCases){
            const output = checkfn(testCases[i].input);
            if(output.valid !== testCases[i].output){
                console.log(testCases[i].input);
                alert("Wrong submission Input: ", JSON.stringify(testCases[i].input));
                if(typeof testCases[i].input === "object"){
                    testCases[i].input = JSON.stringify(testCases[i].input);
                }
                // wrong answer , testcase : testcases[i].input, expectedOutput: testCases[i].output
                // const elem = document.getElementById("wronganswer");
                return;
            }
        }
        console.log("all correct");
        alert("Congrats Submitted Successfully")
        // all answers correct
        moveToNextPage();
        
    } catch (error) {
        alert(error);
        console.log(error);
    }
    finally{
        unregisterSchema("http://example.com/schemas/st");
    }
}

function Playground() {
    let { pageNumber } = useParams();
    const editorRef = useRef(null);
    function code(){ 
        return editorRef.current.getValue();
    }
    const navigate = useNavigate();
    let snipet = `{\n   "$schema": "https://json-schema.org/draft/2020-12/schema",\n}`;
    function setCode(editor,monaco){
        editorRef.current = editor;
    } 
    
      const navlinks = [{
        name:"Docs",
        link:"https://json-schema.org/learn/getting-started-step-by-step"
    },{
        name: "Tools",
        link: "https://json-schema.org/implementations"
    },{
        name: "Github",
        link: "https://github.com/Piyusharora2003/A-Tour-To-Json-Schema/"
    }]
    
    function moveToNextPage(){
        const nextPage = Number(pageNumber)+1 > newPages.length ? 1 : Number(pageNumber) + 1  ;
        navigate(`/learn/playground/${nextPage}`);
    }

    function moveToPreviousPage(){
        if(pageNumber <= 1) return;
        navigate(`/learn/playground/${pageNumber-1}`);
    }

    function DecideComponent(){
        if(newPages[pageNumber-1].pageType === "Blog") return <TheoryPage desc={newPages[pageNumber-1]}/>
        else return (
            <div className='flex h-full bg-zinc-700'>
                <div className='w-1/2 h-full '>
                    <TheoryPage desc={newPages[3]}/>
                </div>
                <div className='h-full  md:w-1/2 flex flex-col '>
                <Edito code ={code} setCode = {setCode}/>
                <div className='w-full flex justify-center z-50'>
                    <button className='border-2 me-6 px-2  rounded text-lg border-yellow-700 bg-amber-500 z-50' onClick={(e)=>{moveToPreviousPage()}}>Prev</button>
                    <button className='border-2 me-6 px-2  rounded text-lg border-yellow-700 bg-amber-500 z-50' onClick={(e)=>{
                            RunUserSchema(code(),newPages[pageNumber-1].testcases,moveToNextPage)                        
                        }}>Submit</button>
                    <button className='border-2 me-6 px-2  rounded text-lg border-yellow-700 bg-amber-500 z-50' onClick={(e)=>{moveToNextPage()}}>Next</button>
                </div>
            </div>
            </div>
        )
    }
    return (
        <div className='bg-gray-100'>
            <Navbar navlinks={navlinks}/>
            <div className='flex '>
                <div className='w-1/5'><Sidebar/></div>
                <div className='bg-sky-100 w-4/5'><DecideComponent/></div>
            </div>
        </div>
        )
}

export default Playground;