import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'
import Navbar from '../Navbar/Navbar';
import styles from './styles.module.css'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    //@description:  Page specific links for the navbar component
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

    // @description: navigate to playground, used in take a tour button only, => void
    function navigateToPlayground(){
        navigate("/learn/playground/1");
    }
    
    // used in animation on entering the page
    const [open, set] = useState(true);
    
    // animation function on entering page , returns => componenets(animated) inside the jsx  
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

    const left = {
        bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
        justifySelf: 'end',
      }
      const right = {
        bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
        justifySelf: 'start',
      }
      
      const Slider = ({ children }) => {
        const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
          x: 0,
          scale: 1,
          ...left,
        }))
        const bind = useDrag(({ active, movement: [x] }) =>
          api.start({
            x: active ? x : 0,
            scale: active ? 1.1 : 1,
            ...(x < 0 ? left : right),
            immediate: name => active && name === 'x',
          })
        )
      
        const avSize = x.to({
          map: Math.abs,
          range: [50, 500],
          output: [0.5, 1],
          extrapolate: 'clamp',
        })
      
        return (
          <animated.div {...bind()} onClick={()=>{navigateToPlayground()}} onMouseLeave={()=>{navigateToPlayground()}} className={styles.item} style={{ background: bg,touchAction: 'none' }}>
            <animated.div className={styles.av} style={{ scale: avSize, justifySelf }} />
            <animated.div className={styles.fg} style={{ x, scale }}>
              {children}
            </animated.div>
          </animated.div>
        )
      }



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
                    <Slider>Start The Tour</Slider>
                </Trail>
            </div>
    </div>
  )
}







export default Home;