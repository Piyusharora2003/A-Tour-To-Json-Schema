import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'
import Navbar from '../Navbar/Navbar';
import styles from './styles.module.css'

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 1500, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={styles.trailsText} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }

function Home() {
    const [open, set] = useState(true)

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
    <div className='bg-sky-300	h-dvh'>
        <Navbar navlinks={navlinks}/>
        {/* <div >
            <div className='text-4xl text-center mt-12 ' style={{fontFamily:"monospace"}}>
                A Tour To JSON Schema
            </div>

        </div> */}
            <div className={styles.container} onClick={() => {
                if(open == false) set(state => !state);
            }}>
                <Trail open={open}>
                    <span className='py-3 my-6'>A Tour To</span>
                    <span>JSON Schema</span>
                    <TakeTourButton/>
                </Trail>
            </div>
    </div>
  )
}

function TakeTourButton(){
    return <button> Start the TOUR</button>
}

export default Home;