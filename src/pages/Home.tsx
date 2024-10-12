import React, { useRef, RefObject } from 'react'
import { createUseStyles } from 'react-jss'
import Nav from 'react-bootstrap/Nav' 
import About from '../components/About'
import Education from '../components/Education'
import Work from '../components/Work'
import Projects from '../components/Projects'
import { Link } from 'react-router-dom'
import { AnimatedBackground } from 'animated-backgrounds'

const NAVBARHEIGHT = 60

const useStyles = createUseStyles({
  navbar: {
    position: 'fixed',
    top: 0,
    height: NAVBARHEIGHT,
    width: '100vw',
    backgroundColor: 'black',
    zIndex: 1,
    paddingTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navlink: {
    color: 'white',
    fontSize: '18px', 
    fontWeight: 'bold',
    padding: '0 20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'color 0.3s',
    '&:hover': { color: '#70b7e0' },
  },
  content: {
    marginTop: 70
  }
})

const Home: React.FC = () => {
  const styles = useStyles()
  const aboutRef = useRef(null)
  const eduRef = useRef(null)
  const workRef = useRef(null)
  const projRef = useRef(null)

  const scrollToElement = (targetRef: RefObject<HTMLDivElement>) => {
    if (targetRef && targetRef.current) {
      const elementPosition = targetRef.current.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - NAVBARHEIGHT
      window.scrollTo({top: offsetPosition, behavior: 'smooth'})
    }
  }

  return (
    <div>
      <AnimatedBackground animationName='neuralNetwork' style={{opacity: .5}}/>

      <div className={styles.sidebar}>
        <Nav activeKey='/home' className={styles.navbar}>
          <Nav.Item>
            <Nav.Link onClick={() => scrollToElement(aboutRef)} className={styles.navlink}> About Me </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => scrollToElement(eduRef)} className={styles.navlink}> Education </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => scrollToElement(workRef)} className={styles.navlink}> Work Experience </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => scrollToElement(projRef)} className={styles.navlink}> Research & Projects </Nav.Link>
          </Nav.Item> 
          <Nav.Item>
            <Nav.Link className={styles.navlink} as={Link} to='/misc'> Fun Stuff </Nav.Link>
          </Nav.Item>         
        </Nav>
      </div>
      <div className={styles.content}>
        <About ref={aboutRef}/>
        <Education ref={eduRef}/>
        <Work ref={workRef}/>
        <Projects ref={projRef}/>
      </div>
    </div>
  )
}

export default Home