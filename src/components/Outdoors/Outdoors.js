import React from 'react'
import { createUseStyles } from 'react-jss'
import { incaTrail, incaCat, brooklyn } from './Base64'

const useStyles = createUseStyles({
    hiking: {
        border: '2px solid #2fa160',
        padding: '8px 10px',
        margin: '8px 8px',
        textAlign: 'center',
        float:' left',
        width: '650px'
    },
    running: {
        border: '2px solid #fca103',
        padding: '8px 10px',
        margin: '8px 8px',
        textAlign: 'center',
        float:'right',
        width: '650px'
    },
    imgLeft: {
        width: '300px',
        float: 'left'
    },
    imgRight: {
        width: '300px',
        float: 'right'
    }
})

const Outdoors = () => {

    const styles = useStyles()

    return (
        <>
            (in progress)
            <br/>
            <div className={styles.hiking}>
                <p>welcome to my hiking section</p>  
                <img src={incaTrail} className={styles.imgLeft}/>  
                <img src={incaCat} className={styles.imgRight}/>

            </div>

            <div className={styles.running}>
                <p>welcome to my running section</p>
                <img src={brooklyn} className={styles.imgRight}/>
            </div>

        </>
        
    )

}

export default Outdoors