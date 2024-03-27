import React from 'react'
import parse from 'html-react-parser';

function TheoryPage({desc}) {
    const {Title,Description} = desc;
  return (
    <div className='p-4'>
        <h1 className='py-2  text-center font-bold text-3xl '>{Title}</h1>
        <div>{
            parse(Description)
      }</div>
    </div>
  )
}

export default TheoryPage;