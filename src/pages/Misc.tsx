import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Card, Spinner } from 'react-bootstrap'
import { AnimatedBackground } from 'animated-backgrounds'
import portugal from '../media/travel/thumbnails/portugal.png'
import mexico from '../media/travel/thumbnails/mexico.png'
import hawaii from '../media/travel/thumbnails/hawaii.png'
import jordan from '../media/travel/thumbnails/jordan.png'
import niagara from '../media/travel/thumbnails/niagara.png'
import tunisia from '../media/travel/thumbnails/tunisia.png'
import seattle from '../media/travel/thumbnails/seattle.png'
import { Gallery } from 'react-grid-gallery'
import { GalleryImage, getImageDimensions } from '../util/imageUtils'

const useStyles = createUseStyles({
  outer: {
    margin: 'auto',
    padding: '10px'
  },
  mainCard: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px'
  },
  imageHover: {
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:  '100vh',
  },
})

const Misc: React.FC = () => {
  const styles = useStyles()
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const trips = [
    { id: 0, name: 'Portugal', link: '/travel/portugal', image: portugal },
    { id: 1, name: 'Mexico', link: '/travel/mexico', image: mexico },
    { id: 2, name: 'Hawaii', link: '/travel/hawaii', image: hawaii },
    { id: 3, name: 'Jordan', link: '/travel/jordan', image: jordan },
    { id: 4, name: 'Niagara Falls', link: '/travel/niagara-falls', image: niagara },
    { id: 5, name: 'Tunisia & Rome', link: '/travel/tunisia-rome', image: tunisia },
    { id: 6, name: 'Seattle', link: '/travel/seattle', image: seattle },
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const loadedImages: GalleryImage[] = await Promise.all(
          trips.map(async (trip) => {
            const dimensions = await getImageDimensions(trip.image);
            const aspectRatio = dimensions.width / dimensions.height;

            const HEIGHT= 300;
            const calculatedWidth = aspectRatio * HEIGHT

            return {
              src: trip.image,
              thumbnail: trip.image,
              width: calculatedWidth,
              height: HEIGHT
            }
          })
        )

        setImages(loadedImages)
      } catch (error) {
        console.error('Error loading images:', error)
      } finally {
        setLoading(false)
      }
    };

    fetchImages();
  }, [trips])

  if (loading) {
    return (
      <div className={styles.spinner}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <div>
      <AnimatedBackground animationName='cosmicDust' />

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
  );
};

export default Misc;
