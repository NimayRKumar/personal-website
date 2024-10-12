import React, { forwardRef, ForwardedRef } from 'react'
import { createUseStyles } from 'react-jss'
import { Card } from 'react-bootstrap'
import { workExp } from '../info/info.js'
const useStyles = createUseStyles({
  outer: {
    margin: 'auto',
    padding: '10px',
    width: '65%',
  },
  cardHeader: {
    backgroundColor: '#001f3f',
    fontWeight: 'bold',
    borderRadius: '10px'
  },
  expCard: {
    marginTop: 25,
    marginBottom: 25,
    color:' white',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '5px'
  },
  expHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 10
  }
})

const Work = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref: ForwardedRef<HTMLDivElement>) => {
  const styles = useStyles()
  return (
    <div className={styles.outer} ref={ref}>
      <h2>Work Experience</h2>
      {
        workExp.map(exp => {
          return (
            <Card className={styles.expCard}>
              <Card.Header className={styles.cardHeader}>
                <p className={styles.expHeader}>
                  <span>{exp.position}, {exp.company}</span>
                  <span>{exp.dates}</span>
                </p>
              </Card.Header>
              <Card.Body>
                <ul>
                  {
                    exp.bullets.map(bullet => {
                    return (
                      <li> {bullet.text}
                        {!!bullet.link && <ul> <li> {bullet.linkText} - <a href={bullet.link} target='_blank'>link</a> </li> </ul>}
                      </li>
                    )
                    })
                  }
                  </ul>
                </Card.Body>  
              </Card>
            )
          })
        }
    </div>
  )
})

export default Work