import React from 'react';
import styles from '../styles/Auth.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Grid } from '@material-ui/core';

function Login() {
  return (
    <>
      <Navbar />
      <div className={styles.mainBody}>
        <Container maxWidth="lg" style={{height: "100%"}}>
          <Grid
            container
            direction="row"
            justify="center"
            style={{height: "100%"}}>
              <Grid
                item
                xs={10}
                sm={6}>
                  <div className={styles.innerBody}>
                    <img src='/assets/kit/logo_linear.png' className={styles.brandLogo}/>
                    <div className={styles.formBody}>

                    </div>
                  </div>
              </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Login;