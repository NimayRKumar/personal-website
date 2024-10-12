import { React, forwardRef } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  outer: {
    margin: 'auto',
    padding: '10px',
    width: '65%',
  },
  education: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})


const Education = forwardRef((props, ref) => {
  const styles = useStyles()
  return (
    <div className={styles.outer} ref={ref}>
      <h2>Education</h2>
      <p className={styles.education}>
        <span><b>University of Pennsylvania </b>- MSE in Data Science</span>
        <span>Aug 2022 - Dec 2024</span>
      </p>
      <p className={styles.education}>
        <span><b>The University of Texas at Austin </b>- BS in Electrical & Computer Engineering</span>
        <span>Aug 2016 - May 2020</span>
      </p>
    </div>
  )
})

export default Education