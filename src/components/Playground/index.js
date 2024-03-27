import React,{useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { registerSchema, unregisterSchema, validate } from "@hyperjump/json-schema/draft-2020-12";
import { pages } from '../../Problems.js';

import Navbar from '../Navbar/Navbar.js';
import ProblemSetter from "./ProblemSetter.js"
import Edito from "./Editor.js"
import TheoryPage from './TheoryPage.js';

// @description:
//  Checks for any syntaxical error if error return syntax error else return (all tc's not cleared return wrong tc else navigate to next page)  
async function RunUserSchema(schema,testCases,moveToNextPage){
    // Register the schema
    try {
        registerSchema(JSON.parse(schema),"http://example.com/schemas/st");
        const checkfn = await validate("http://example.com/schemas/st");

        for(let i in testCases){
            const output = checkfn(testCases[i].input);
            console.log(i+1,output.valid,testCases[i].output);
            if(output.valid !== testCases[i].output){
                console.log(output);
                if(typeof testCases[i].input === "object"){
                    testCases[i].input = JSON.stringify(testCases[i].input);
                }
                // wrong answer , testcase : testcases[i].input, expectedOutput: testCases[i].output
                const elem = document.getElementById("wronganswer");
                elem.innerHTML=`<div>
                    Wrong answer at Testcase ${i+1}:
                    <div class="ms-6">
                        INPUT: ${String(testCases[i].input)} 
                    </div>
                    <div class="ms-6">
                        Expected Output: ${testCases[i].output}
                    </div>
                    <div class="ms-6">
                        Explaination: ${testCases[i].explaination}
                    </div>
                </div>`
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
    const navigate = useNavigate();
    let snipet = `{\n   "$schema": "https://json-schema.org/draft/2020-12/schema",\n}`;
    if(pages[pageNumber-1].pageCategory === "Theory" && pages[pageNumber-1].exampleSnippet !== undefined){
        snipet = JSON.stringify(pages[pageNumber-1].exampleSnippet);
    }
    /* TODO: Change useState to UseRef. */
    const [code, setCode] = useState(
        snipet
      );

    
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
        const nextPage = Number(pageNumber)+1 > pages.length ? 1 : Number(pageNumber) + 1  ;
        navigate(`/learn/playground/${nextPage}`);
    }

    function moveToPreviousPage(){
        if(pageNumber <= 1) return;
        navigate(`/learn/playground/${pageNumber-1}`);
    }

    function DecideComponent(){
        if(pages[pageNumber-1].pageCategory === "Theory") return<TheoryPage desc={pages[pageNumber-1]}/>
        else return <ProblemSetter desc={pages[pageNumber-1]}/>
    }
    
  return (
    <div className='h-dvh bg-gray-100'>
        <Navbar navlinks={navlinks}/>
        <div className='w-full  md:flex md:h-5/6 '>
            <div className='md:w-1/2 '>
                    <DecideComponent/>
                    {/* TODO: Apply check for pageNumber > problems.length */}
            </div>
            <div className='h-full  md:w-1/2 flex flex-col justify-between'>
                <Edito code ={code} setCode = {setCode}/>
                <div className='w-full flex justify-end z-50'>
                    <button className='border-2 me-6 px-2  rounded text-lg border-yellow-700 bg-amber-500 z-50' onClick={(e)=>{moveToPreviousPage()}}>Prev</button>
                    <button className='border-2 me-6 px-2  rounded text-lg border-yellow-700 bg-amber-500 z-50' onClick={(e)=>{
                        if(pages[pageNumber-1].pageCategory === "Question"){
                            RunUserSchema(code,pages[pageNumber-1].testcases,moveToNextPage)
                        }else{
                            moveToNextPage()
                        }
                        }}>Submit</button>
                    <button className='border-2 me-6 px-2  rounded text-lg border-yellow-700 bg-amber-500 z-50' onClick={(e)=>{moveToNextPage()}}>Next</button>
                </div>
            </div>
        </div>
        <div id='wronganswer'></div>
    </div>
  )
}

export default Playground;