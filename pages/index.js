import Navbar from '../components/commons/Navbar';
import styles from '../styles/Home.module.css';
import { Grid, Container, Button } from '@material-ui/core';
import { PrimaryButton } from '../components/MaterialComponents';
import { useWindowDimensions } from '../utils/windowUtils';
import Footer from '../components/commons/Footer';
import { GoForward, ProfileBordered, FileUploadBordered, WaveDuotone } from '../components/CustomIcons';
import axios from 'axios';

function Home(props) {
  const { width } = useWindowDimensions();
  const { authenticated } = props;

  return (
    <>
      <Navbar authenticated={authenticated}/>
      <div id={styles.showcase}>
        <div id='showcaseImage'>
          <h1>Listen to <br></br>&emsp;&emsp;your Docs</h1>
        </div>
        {/* <img src="./assets/kit/coverAsset@10x.png" id={styles.showcaseImage}></img> */}
        <div
          id={styles.innerShowcase}
          style={{ height: width >= 769 ? '85%' : '105%' }}
        >
          <Container maxWidth='lg' style={{ height: '100%' }}>
            <Grid
              container
              direction='row'
              justify={width >= 769 ? 'flex-start' : 'center'}
              alignItems='flex-end'
              style={{ height: '100%' }}
            >
              <Grid item>
                <PrimaryButton
                  href={!authenticated ? '/signup' : '/dashboard'}
                  size='large'
                  variant='contained'
                  endIcon={<i><GoForward width="1.15rem"/></i>}
                >
                  {!authenticated ? 'Start Listening' : 'Go to Dashboard'}
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
              <i><ProfileBordered width="5rem"/></i>
              </div>
              <h5 className={styles.stepTitle}>Sign In</h5>
              <p className={styles.stepText}>Lorem ipsum dolor sit amut, conqueringser endur ispin go lutat.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
              <i><FileUploadBordered width="5rem"/></i>
              </div>
              <h5 className={styles.stepTitle}>Upload</h5>
              <p className={styles.stepText}>Lorem ipsum dolor sit amut, conqueringser endur ispin go lutat.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
              <i><WaveDuotone width="5rem"/></i>
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

export async function getServerSideProps(context) {
  try {
    const user = await axios.get("http://localhost:5000/api/users/current", { withCredentials: true });
    console.log(user);
    return {
      props: {
        authenticated: true
      }
    }
  } catch (err) {
    console.log(err);
    return {
      props: {
        authenticated: false
      }
    }
  }
}

export default Home;