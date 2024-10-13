import React, { forwardRef, ForwardedRef } from 'react'
import { useTheme } from './ThemeToggle'
import { createUseStyles } from 'react-jss'
import { Card } from 'react-bootstrap'
import { workExp } from '../util/workUtils'

const useStyles = createUseStyles({
  outer: {
    margin: 'auto',
    padding: '10px',
    width: '65%',
  },
  cardHeader: {
    backgroundColor: (themeStyles: any) => themeStyles.cardHeader.backgroundColor,
    color: (themeStyles: any) => themeStyles.textColor,
    fontWeight: 'bold',
    borderRadius: '10px'
  },
  expCard: {
    backgroundColor: (themeStyles: any) => themeStyles.card.backgroundColor,
    color: (themeStyles: any) => themeStyles.textColor,
    border: (themeStyles: any) => themeStyles.card.border,
    borderRadius: '5px',
    marginTop: 25,
    marginBottom: 25,
  },
  expHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 10
  },
  link: { color: '#007bff'}
})

const Work = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref: ForwardedRef<HTMLDivElement>) => {
  const { themeStyles } = useTheme()
  const styles = useStyles(themeStyles)

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
                        {!!bullet.link && <ul> <li> {bullet.linkText} - <a href={bullet.link} target='_blank' className={styles.link}>link</a> </li> </ul>}
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