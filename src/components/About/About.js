import React from 'react'
import { createUseStyles } from 'react-jss'

import pdr from '../../media/pdr.jpg'

const useStyles = createUseStyles({
    outer: {
        margin: 'auto',
        padding: '10px',
        width: '70%',
    },
    inner: {
        padding: '5px 0px',
        display: 'inline'
    },
    profile: {
        borderRadius: '20%',
        width: '400',
        height: '500',
    },
    indent: {
        paddingLeft: '25px',
        padding: '5px'
    },
    resume: {
        textAlign: 'center'
    }
})

const About = () => {
    const styles = useStyles()

    return (
        <>
            <div align='center'>
                <img src={pdr} className={styles.profile} width={'500'}/>
                <h1><big>Nimay Kumar</big></h1>
            </div>

            <div className={styles.outer}>
                <h2>About Me</h2>
                <p>I'm currently in my final semester as a Master's in Data Science studnet at University of Pennsylvania
                    and am currently looking for a full-time position. I did my undergrad in Electrical & Computer Engineering at the University of Texas at Austin,
                    and my career interests are in software engineering & machine learning. My work & research experience has been in full-stack software engineering 
                    machine learning, and data science.  
                </p>
                <br/>
                <h2>Hobbies</h2>
                <div className={styles.indent}>
                    <b>Music: </b>
                    I am a huge classical music and music theory nerd, and am currently learning cello
                    and playing in Penn's Medical Symphony. I also used to play piano, alto & bari sax. 
                </div>
                <div className={styles.indent}>
                    <b>Running: </b>
                    I love long-distance running and my next race is the Tokyo Marathon.
                </div>
                <div className={styles.indent}>
                    <b>Travel: </b>
                    I love visiting new places and my favorite places I've visited are Peru, Portugal, Jordan and Tunisia.
                </div>
                <div className={styles.indent}>
                    <b>Miscellaneous: </b>
                    I occasionally find time to practice Argentine Tango. I'm also a huge fan of Better Call Saul & The Wire.
                </div>

                <h2>Links</h2>
                <div className={styles.indent}>
                    <a href="https://www.linkedin.com/in/nimaykumar/">LinkedIn</a>
                </div>
                <div className={styles.indent}>
                    <a href="https://github.com/NimayRKumar">Github</a>
                </div>

                <div className={styles.resume}>
                    <p>
                        <a 
                            href="https://drive.google.com/file/d/1e0-n1ui8HTlsPx4WJGUatRz15-KjxXCi/view?usp=sharing"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About