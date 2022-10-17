import React from 'react'
import { createUseStyles } from 'react-jss'

import { profile4 } from './Base64'

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
        borderRadius: '10%',
        transform: 'rotate(40deg)'
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
                <img src={profile4} className={styles.profile}/>
                <h1><big>Nimay Kumar</big></h1>
            </div>

            <div className={styles.outer}>
                <h2>About Me</h2>
                <p>I'm currently a developer for the Ritchie Lab at the Perelman School of Medicine,
                    and an MSE in Data Science student at University of Pennsylvania.
                    I did my undergrad in Electrical & Computer Engineering at the University of Texas at Austin, and 
                    my career interest are in machine learning.
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
                    I love running, especially traveling to new places for races. I recently completed the Brooklyn 
                    and PDR Half Marathons, and am training for the Philadelphia Marathon, which will be my first full marathon.
                </div>
                <div className={styles.indent}>
                    <b>Miscellaneous: </b>
                    I recently started learning Argentine Tango. I'm also obsessed with Better Call Saul.
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
                            href="https://drive.google.com/file/d/1CytiyxDBV4z0N_7PjqlNSF3xxvTYMCM8/view?usp=sharing"
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