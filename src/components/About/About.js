import React from 'react'
import { createUseStyles } from 'react-jss'
import { Button } from 'react-bootstrap'

import { profile } from './Base64'

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
        borderRadius: '50%'
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
                <img src={profile} className={styles.profile}/>
                <h1><big>Nimay Kumar</big></h1>
            </div>

            <div className={styles.outer}>
                <h2>About Me</h2>
                <p>I'm currently a software engineer at the <a href="https://ritchielab.org/"> Ritchie Lab </a>
                    and an incoming MSE in Data Science student at University of Pennsylvania!
                    I did my undergrad in Electrical & Computer Engineering at the University of Texas at Austin.
                    My career interest are in machine learning and data science, particularly in medicine and biomedical engineering.
                </p>
                <br/>
                <h2>Hobbies</h2>
                <div className={styles.indent}>
                    <b>Music: </b>
                    I am a huge classical music and music theory nerd, and am currently learning the cello & composing. I also used to play the piano! Read more about my musical experiences <a href='/music'>here.</a>
                </div>
                <div className={styles.indent}>
                    <b>Running & Hiking: </b>
                    I love running and hiking, and am always looking for new sights to see. I recently completed the Woodlands and RBC Brooklyn Half Marathons, 
                    and am training for the Philadelphia Full. Read more about my outdoorsy endeavors <a href='/outdoors'>here.</a>
                </div>
                <div className={styles.indent}>
                    <b>Miscellaneous: </b>
                    Beyond music and running, I've started dipping my toes into dancing, public speaking (Toastmasters), and cooking.
                    I am also an unapologetical Better Call Saul fan.
                </div>

                <h2>Contact</h2>
                <div className={styles.indent}>
                    kumar.nimay@yahoo.com
                </div>
                <div className={styles.indent}>
                    <a href="https://www.linkedin.com/in/nimaykumar/">LinkedIn</a>
                    ,&nbsp;
                    <a href="https://github.com/NimayRKumar">Github</a>
                </div>

                <div className={styles.resume}>
                    <p>
                        <a 
                            href="https://drive.google.com/file/d/19e6olmDTpnHBPu14-yjL_cHfee-k0Rk3/view?usp=sharing"
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