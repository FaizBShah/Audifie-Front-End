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
          style={{ height: width >= 600 ? '85%' : '100%' }}
        >
          <Container maxWidth='lg' style={{ height: '100%' }}>
            <Grid
              container
              direction='row'
              justify={width >= 600 ? 'flex-start' : 'center'}
              alignItems='flex-end'
              style={{ height: '100%' }}
            >
              <Grid item xs={9} sm={4}>
                <PrimaryButton
                  size='large'
                  variant='contained'
                  endIcon={<i class='fas fa-angle-double-right'></i>}
                >
                  Start Listening
                </PrimaryButton>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
