import { React, forwardRef } from 'react'
import { createUseStyles } from 'react-jss'
import { Card, Col, Row } from 'react-bootstrap'
import spec from '../media/proj/spectrogram.png'
import voc from '../media/proj/vocalitics.png'
import bball from '../media/proj/bball.png'
import dots from '../media/proj/dots.png'
import schwadio from '../media/proj/schwadio.png'
import lego from '../media/proj/lego.png'
import togle from '../media/proj/togle.png'
import olympics from '../media/proj/olympics.png'

const useStyles = createUseStyles({
  outer: {
    margin: 'auto',
    padding: '10px',
    width: '65%',
  },
  cardHeader: {
    backgroundColor: '#001f3f',
    fontWeight: 'bold'
  },
  expCard: {
    marginTop: 25,
    marginBottom: 25,
    color:' white',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    border: '2px solid rgba(255, 255, 255, 0.2)'
  },
  expHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 10,
  },
  imgCol: {
    display: 'flex',
    alignItems: 'center',
  },
  projImg: {
    width: 225,
    height: 225,
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: 5
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    transition: 'transform 0.2s ease',
    '&:hover': {
      color: '#0056b3'
    }
  }
})

const Projects = forwardRef((props, ref) => {
  const styles = useStyles()

  return (
    <div className={styles.outer} ref={ref}>
      <h2>Research & Projects</h2>
      <Row>
        <Col md={3} className={styles.imgCol}>
          <img src={spec} className={styles.projImg}/>
        </Col>
        <Col md={9}>
          <Card className={styles.expCard}>
            <Card.Header className={styles.cardHeader}>
              <p className={styles.expHeader}>
                <span>Classifying animal sounds through spectrogram image classification with deep neural networks</span>
              </p>
            </Card.Header>
            <Card.Body>
              In 2021, Gong et al. introduced the <a className={styles.link} href='https://arxiv.org/abs/2104.01778' target='_blank'>Audio Spectrogram Transformer</a> (AST): a new architecture
              to classify an audio signal from its spectrogram image using only attention; no convolutions. Two friends and I decided to compare established classification models
              with the AST based on their performance classifying animals from the sounds they make. The architectures we chose to compare to were VGG CNNs, and 
              RNNs both with and without LSTM. We wrote data pipelines in Python to process the raw audio data into spectrogram and Mel-frequency Cepstral Coefficient images for our 
              training and validation sets. Due to limited data, we augmented our training set by appying Gaussian noise to images. Ultimately the VGG CNN and the AST performed the best,
              with validation accuracies of 80.0% and 72.5%, respectively. 
              <br/>
              <br/>
              We used PyTorch to create and train our networks, and ran them on Google Colab notebooks using T4 GPUs. Check out our code and report <a  className={styles.link} href='https://github.com/NimayRKumar/in_the_jungle' target='_blank'>here</a>.
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={3} className={styles.imgCol}>
          <img src={togle} className={styles.projImg}/>
        </Col>
        <Col md={9}>
          <Card className={styles.expCard}>
            <Card.Header className={styles.cardHeader}>
              <p className={styles.expHeader}>
                <span>Auto-augmentation methods for image data in contrastive self-supervised learning (CSSL)</span>
              </p>
            </Card.Header>
            <Card.Body>
              For a semester I researched methods auto-augment methods for image data for CSSL under professor Surbhi Goel. Self-Supervised Learning (SSL) 
              allows models to learn data representation without provided labels, which can be used for tasks such as classification. Contrastive Self-Supervised Learning (CSSL) 
              divides training data into positive and negative pairs where positive pairs are formed by different augmentations of the same input, whereas negative pairs stem from different inputs.
              Common augmentations include Gaussian blurring (seen in the cat photo on the left), rotations, and cropping. After surveying existing literature on auto-augment methods I brainstormed and implemented
              new ideas that involved applying varying length sequences of compoundedaugmentations, chosen from a set of standard augmentations. These augmentations performed in sequence
              correspond to a rotation matrix which once known could be used to augment data, and finding this matrix can be done by solving Wahba's Problem.   
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={3} className={styles.imgCol}>
          <img src={voc} className={styles.projImg}/>
        </Col>
        <Col md={9}>
          <Card className={styles.expCard}>
            <Card.Header className={styles.cardHeader}>
              <p className={styles.expHeader}>
                <span>Vocalitics - Meeting Data Analytics Tool</span>
              </p>
            </Card.Header>
            <Card.Body>
              For my senior design project, my teammates and I decided to prototype a meeting analytics tool, which we fondly called Vocalitics.
              Vocalitics recorded meetings and transcribed them into scripts using IBM Watson speech-to-text. We identified the distinct speakers
              and analyzed their sentiments throughout a meeting, as well as how their sentiments changed over time.
              <br/>
              <br/>
              Check out a demo <a  className={styles.link} href='https://www.youtube.com/watch?v=E-m29BOnMSU' target='_blank'>here</a>!
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={3} className={styles.imgCol}>
          <img src={olympics} className={styles.projImg}/>
        </Col>
        <Col md={9}>
          <Card className={styles.expCard}>
            <Card.Header className={styles.cardHeader}>
              <p className={styles.expHeader}>
                <span>Olympic Games Data Visualization & Analysis</span>
              </p>
            </Card.Header>
            <Card.Body>
              A few friends and I made a website for visualizing Olympic games stats by country. We scraped the data in Python using pyspider
              and BeautifulSoup to format into JSON files, which we stored on MongoDB, and used Google GeoCharts to visualize it over a world map.
              Challenges in this project involved learning about XML and dealing with messy and unformatted data scraped from the web.
              <br/>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={3} className={styles.imgCol}>
          <img src={lego} className={styles.projImg}/>
        </Col>
        <Col md={9}>
          <Card className={styles.expCard}>
            <Card.Header className={styles.cardHeader}>
              <p className={styles.expHeader}>
                <span>LEGO AR World - Augmented Reality iOS App</span>
              </p>
            </Card.Header>
            <Card.Body>
              Growing up I loved LEGO, so when learning about computer vision in my coursework I had the idea of using Augmented Reality
              to superimpose LEGO building instructions on partially created models. Together with two friends, we created an iOS app prototype
              that did just that using Apple ARKit and ORB and FlannBasedMatcher from OpenCV.
              <br/>
              <br/>
              Check out a demo on YouTube <a  className={styles.link} href='https://www.youtube.com/watch?v=qUBqHy0CNu4' target='_blank'>here</a>!
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={3} className={styles.imgCol}>
          <img src={bball} className={styles.projImg}/>
        </Col>
        <Col md={9}>
          <Card className={styles.expCard}>
            <Card.Header className={styles.cardHeader}>
              <p className={styles.expHeader}>
                <span>Basketball Predictive Analytics</span>
              </p>
            </Card.Header>
            <Card.Body>
              Four friends and I decided to investigate the NBA shotlog dataset from the 2014-2015 season, initially inrigued by the "hot-hand" phenomonen.
              We cleaned the dataset and clustered players based on their data, as well as creating 3D heatmaps for each one. We visualized these clusters using
              a force-directed graph that we made using D3.js.
              <br/>
              <br/>
              Take a look at our visualization tool <a  className={styles.link} href='https://nimayrkumar.github.io/bball-dgraph/index.html' target='_blank'>here</a> and check out our article on TowardsDataScience <a href='https://towardsdatascience.com/insights-from-raw-nba-shot-log-data-and-an-exploration-of-the-hot-hand-phenomenon-1f1c6c63685a' target='_blank'>here</a>,
              which was also <a  className={styles.link} href='https://towardsdatascience.com/february-edition-data-visualization-18e1b663edc4' target='_blank'>highlighted</a> by TowardsDataScience as a standout for data visualization.
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={3} className={styles.imgCol}>
          <img src={schwadio} className={styles.projImg}/>
        </Col>
        <Col md={9}>
          <Card className={styles.expCard}>
            <Card.Header className={styles.cardHeader}>
              <p className={styles.expHeader}>
                <span>Schwadio: Voice Recognition Authentication - HackTX 3rd Place Winner</span>
              </p>
            </Card.Header>
            <Card.Body>
              At HackTX 2018, four friends and I teamed up to take on Charles Schwab's challenge: create a passwordless authentication system.
              We decided to go for voice recognition, requiring a user to speak an answer to a security question, verifying identity both by the correctness
              of the response and the voice who said it. Hence "Schwadio", a portmanteau of "Schwab" and "Audio". Our project won the Schwab challenge and won
              3rd place overall.
              <br/>
              <br/>
              Challenges we faced were brainstorming ideas and implementing them within 24 hours. Tech stack we used included Google Firebase,
              Azure and Tensorflow.
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={3} className={styles.imgCol}>
          <img src={dots} className={styles.projImg}/>
        </Col>
        <Col md={9}>
          <Card className={styles.expCard}>
            <Card.Header className={styles.cardHeader}>
              <p className={styles.expHeader}>
                <span>Wholesome Studio - UT Austin Wholesome Hacks 2nd Place Winner</span>
              </p>
            </Card.Header>
            <Card.Body>
              At Wholesome Hacks 2018, a Hackathon about wellbeing, we created a webapp for reducing anxiety and stress through relaxing animations and 
              sound. We created the audio ourselves and used paper.js howler.js to implement our animations and sound.
              <br/>
              <br/>
              Try it for yourself <a  className={styles.link} href='https://nimayrkumar.github.io/wholesome-studio/index.html' target='_blank'>here</a>!
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
})

export default Projects