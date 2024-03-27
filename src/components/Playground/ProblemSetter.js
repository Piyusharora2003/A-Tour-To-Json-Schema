import React from 'react';

function ProblemSetter({desc}) {
  return (

    <div className='px-6 pt-4'>
      <div className='font-bold text-xl'>{desc.title}</div>
      <div className='py-2'> {desc.description} </div>
      <div>
        {
          (desc.examples).map(({input,output,explaination},index)=>{
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
    </div>
  )
}

export default ProblemSetter;


// Layout of desc
// desc: {
//     title:"",
//     description: "",
//     examples:[{
//         input:"",
//         output:"",
        // explaination:""  /*(optional)*/
//     }],
//     testcases:[{
//         input:"",
//         output:""
//     }],
//     editorial:{
//     }
// }