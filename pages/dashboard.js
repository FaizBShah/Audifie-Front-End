import React from 'react';
import styles from '../styles/Dashboard.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { withSSRContext } from 'aws-amplify';
import { Container, Grid } from '@material-ui/core';
import { PrimaryButton } from '../components/MaterialComponents';
import PrimaryCard from '../components/Card';

function Dashboard(props) {
  const { authenticated } = props;

  return (
    <>
      <Navbar authenticated={authenticated}/>
      <div className={styles.uploadSection}>
        <Container maxWidth="lg" style={{height: "100%"}}>
          <Grid
            container
            direction="row"
            justify="center"
            style={{height: "100%"}}
          >
            <Grid
              item
              xs={9}
              sm={4}
            >
              <PrimaryButton
                size="medium"
                variant="contained"
                style={{width: "100%"}}
              >
                Upload Docs
              </PrimaryButton>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.mainSection}>
        <Container maxWidth="lg" style={{height: "100%"}}>
          <div className={styles.headingSection}>
            <h3 className={styles.heading}>Your Books</h3>
            <div className={styles.divider}></div>
          </div>
          <img className={styles.uploadImage} src="/assets/kit/uploadAsset@10x.png" />
          <p className={styles.uploadText}>Upload Documents to listen</p>
          <PrimaryCard defaultCard={false}/>
        </Container>
      </div>
      <Footer/>
    </>
  )
}

export async function getServerSideProps({req, res}) {
  const { Auth } = withSSRContext({ req });

  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
    return {
      props: {
        authenticated: true
      }
    }
  } catch (err) {
    console.log(err);
    res.writeHead(302, {Location: '/signup'});
    res.end();
  }
  return {
    props: {
      authenticated: false
    }
  }
}

export default Dashboard;