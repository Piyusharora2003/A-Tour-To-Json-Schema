import React from 'react';
import Navbar from '../Navbar/Navbar';

function Home() {
    const navlinks = [{
        name: "Playground",
        link: "/learn/playground/1"
    },{
        name:"Docs",
        link:"https://json-schema.org/learn/getting-started-step-by-step"
    },{
        name: "Blogs",
        link:"https://json-schema.org/blog"
    },{
        name: "Tools",
        link: "https://json-schema.org/implementations"
    }]
  return (
    <div>
        <Navbar navlinks={navlinks}/>
    </div>
  )
}

export default Home;