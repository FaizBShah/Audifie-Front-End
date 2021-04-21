import React from 'react';
import styles from '../styles/Dashboard.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { withSSRContext } from 'aws-amplify';
import { Container, Grid } from '@material-ui/core';
import { PrimaryButton } from '../components/MaterialComponents';

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
              xs={10}
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