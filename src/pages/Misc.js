import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { Card } from 'react-bootstrap'
import { AnimatedBackground } from 'animated-backgrounds'
import portugal from '../media/travel/thumbnails/portugal.png'
import mexico from '../media/travel/thumbnails/mexico.png'
import hawaii from '../media/travel/thumbnails/hawaii.png'
import jordan from '../media/travel/thumbnails/jordan.png'
import niagara from '../media/travel/thumbnails/niagara.png'
import tunisia from '../media/travel/thumbnails/tunisia.png'
import seattle from '../media/travel/thumbnails/seattle.png'
import { Gallery } from 'react-grid-gallery'

const useStyles = createUseStyles({
  outer: {
    margin: 'auto',
    padding: '10px',
  },
  mainCard: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
  },
  imageHover: {
    transition: 'transform 0.3s ease', // Smooth transition for scaling
    '&:hover': {
      transform: 'scale(1.1)', // Scale up the image on hover
    },
  },
})

const Misc = () => {
  const styles = useStyles();
  const trips = [
    { id: 0, name: 'Portugal', link: '/travel/portugal', image: portugal },
    { id: 1, name: 'Mexico', link: '/travel/mexico', image: mexico },
    { id: 2, name: 'Hawaii', link: '/travel/hawaii', image: hawaii },
    { id: 3, name: 'Jordan', link: '/travel/jordan', image: jordan },
    { id: 4, name: 'Niagara Falls', link: '/travel/niagara-falls', image: niagara },
    { id: 5, name: 'Tunisia & Rome', link: '/travel/tunisia-rome', image: tunisia },
    { id: 6, name: 'Seattle', link: '/travel/seattle', image: seattle },
  ]

  const images = trips.map((trip) => ({
    src: trip.image,
    thumbnail: trip.image,
  }))

  return (
    <div>
      <AnimatedBackground animationName='starryNight'/>

      <div className={styles.outer}>
        <Card className={styles.mainCard}>
          <Card.Title>Under construction...</Card.Title>
          <Card.Body>
            <Gallery
              images={images}
              rowHeight={300}
              enableImageSelection={false}
              margin={5}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Misc