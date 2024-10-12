import React, { forwardRef, ForwardedRef } from 'react'
import { createUseStyles } from 'react-jss'
import Button from 'react-bootstrap/Button'
import me from '../media/profile/long_hair.jpg'

const useStyles = createUseStyles({
  outer: {
    margin: 'auto',
    padding: '10px',
    width: '65%'
  },
  centered: {
    textAlign: 'center'
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    border: 'none',
    borderRadius: '10px'
  },
  profile: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: '5%',
    height: 500,
    width: 'auto'
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#001f3f',
    marginLeft: 50,
    marginRight: 50,
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
      backgroundColor: '#0056b3',
      transform: 'scale(1.1)'
    }
  }
})

const openLink = (link: string) => {
  window.open(link, '_blank')
}

const About = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref: ForwardedRef<HTMLDivElement>) => {
  const styles = useStyles()
  return (
    <div ref={ref}>
      <div className={styles.centered}>
        <img src={me} className={styles.profile} width={500} alt='profile'/>
        <h1><big>Nimay Kumar</big></h1>
      </div>
      <div className={styles.outer}>
        <h2>About Me</h2>
        <p>
          I'm currently in my final semester of my Data Science Master's at University of Pennsylvania and am looking for a full-time position. I did my undergrad in 
          Electrical & Computer Engineering at the University of Texas at Austin, and my career interests are in machine learning engineering and software engineering. 
          My research experience at Penn has been in machine learning, and my 4 years of work experience has been in full-stack software engineering. 
          In my free time I enjoy running, practicing cello, travelling, and occasionally dancing Argentine tango. 
        </p>
        <br/>
        <div className={styles.links}>
          <Button className={styles.button} variant={'dark'} onClick={() => openLink('https://drive.google.com/file/d/1katlJJ-juflK4aTQ53-22fS13Xps9Hwo/view?usp=sharing')}>
            Resume
          </Button>
          <Button className={styles.button} variant={'dark'} onClick={() => openLink('https://github.com/NimayRKumar')}>
            GitHub
          </Button>
          <Button className={styles.button} variant={'dark'} onClick={() => openLink('https://www.linkedin.com/in/nimaykumar/')}>
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  )
})

export default About