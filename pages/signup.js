import React from 'react';
import styles from '../styles/Auth.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Grid } from '@material-ui/core';
import { PrimaryInput, PrimaryButton } from '../components/MaterialComponents';
import { useWindowDimensions } from '../common/windowUtils';

function Signup() {
  const { width } = useWindowDimensions();

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
                sm={4}>
                  <div className={styles.innerBody}>
                    <img src='/assets/kit/logo_linear.png' className={styles.brandLogo}/>
                    <div className={styles.formBody}>
                      <form className={styles.form}>
                        <PrimaryInput  
                          type="text" 
                          label="Name" 
                          variant="outlined"
                          style={{marginBottom: "2rem"}}/>
                        <PrimaryInput  
                          type="email" 
                          label="Email" 
                          variant="outlined"
                          style={{marginBottom: "2rem"}}/>
                        <PrimaryInput  
                          type="password" 
                          label="Password" 
                          variant="outlined"
                          style={{marginBottom: "2rem"}}/>
                        <PrimaryInput  
                          type="password" 
                          label="Confirm Password" 
                          variant="outlined"
                          style={{marginBottom: "2rem"}}/>
                        <PrimaryButton
                          size="large"
                          type="contained"
                          style={{width: "100%"}}>
                          Sign Up
                        </PrimaryButton>
                      </form>
                      <div className={styles.dividerArea}>
                        <div className={styles.divider}></div>
                          <div className={styles.dividerText}>
                            or Sign in with
                          </div>
                        <div className={styles.divider}></div>
                      </div>
                      <div className={styles.federatedArea}>
                        <PrimaryButton
                          size="large"
                          type="contained"
                          style={{width: "100%", flex: "1", marginBottom: "1rem", marginRight: width > 768 ? "1rem" : "0"}}>
                            Google
                        </PrimaryButton>
                        <PrimaryButton
                          size="large"
                          type="contained"
                          style={{width: "100%", flex: "1", marginBottom: "1rem"}}>
                            Facebook
                        </PrimaryButton>
                      </div>
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

export default Signup;