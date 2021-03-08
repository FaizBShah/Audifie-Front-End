import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import { Grid, Container, Button } from '@material-ui/core';
import { PrimaryButton } from '../components/MaterialComponents';
import { useWindowDimensions } from '../common/windowUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import Footer from '../components/Footer';

function Home() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Navbar />
      <div id={styles.showcase}>
        <div id='showcaseImage'></div>
        {/* <img src="./assets/kit/coverAsset@10x.png" id={styles.showcaseImage}></img> */}
        <div
          id={styles.innerShowcase}
          style={{ height: width >= 600 ? '85%' : '95%' }}
        >
          <Container maxWidth='lg' style={{ height: '100%' }}>
            <Grid
              container
              direction='row'
              justify={width >= 600 ? 'flex-start' : 'center'}
              alignItems='flex-end'
              style={{ height: '100%' }}
            >
              <Grid item>
                <PrimaryButton
                  size='large'
                  variant='contained'
                  endIcon={<i className='fas fa-angle-double-right'></i>}
                >
                  Start Listening
                </PrimaryButton>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <div id={styles.mainBody}>
        <Container maxWidth='lg'>
          <p className={styles.mainText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum deleniti dolorem iste accusamus, nulla reiciendis. Blanditiis fuga dolorem eveniet nisi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <h2 className={styles.howTitle}>How it works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <i className="fas fa-user fa-5x"></i>
              </div>
              <h5 className={styles.stepTitle}>Sign In</h5>
              <p className={styles.stepText}>Lorem ipsum dolor sit amut, conqueringser endur ispin go lutat.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <i className="fas fa-upload fa-5x"></i>
              </div>
              <h5 className={styles.stepTitle}>Upload</h5>
              <p className={styles.stepText}>Lorem ipsum dolor sit amut, conqueringser endur ispin go lutat.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <i className="fas fa-headphones fa-5x"></i>
              </div>
              <h5 className={styles.stepTitle}>Listen</h5>
              <p className={styles.stepText}>Lorem ipsum dolor sit amut, conqueringser endur ispin go lutat.</p>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Home;
