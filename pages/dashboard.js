import React, {useState} from 'react';
import styles from '../styles/Dashboard.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { withSSRContext, Auth } from 'aws-amplify';
import { Container, Grid, Link } from '@material-ui/core';
import { PrimaryButton, MainDrawer, LoaderBackdrop } from '../components/MaterialComponents';
import Card from '../components/Card';
import { Loader } from '../components/CustomIcons';

function Dashboard() {
  const [loading, setLoading] = useState(false);

  const signOut = (e) => {
    e.preventDefault();

    setLoading(true);

    Auth.signOut()
      .then(() => {
        console.log("Signed Out");
        router
          .push('/')
          .then(() => {
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <MainDrawer
        variant={"permanent"}
        anchor={"left"}
      >
        <Link href="/">
          <img src="/assets/svg/logo_linear.svg" className={styles.brandLogo}></img>
        </Link>
        <div className={styles.uploadContainer}>
          <PrimaryButton
            size="small"
            variant="contained"
            style={{width: "100%"}}
          >
            Upload
          </PrimaryButton>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <i className="fas fa-home"></i>
            &nbsp;
            &nbsp;
            <a>Home</a>
          </div>
          <div className={styles.menuItem}>
            <i className="fas fa-book"></i>
            &nbsp;
            &nbsp;
            <a>Library</a>
          </div>
          <div className={styles.menuItem}>
            <i className="fas fa-dollar-sign"></i>
            &nbsp;
            &nbsp;
            <a>Upgrade</a>
          </div>
          <div className={styles.menuItem}>
            <i className="fas fa-cog"></i>
            &nbsp;
            &nbsp;
            <a>Settings</a>
          </div>
        </div>
        <div className={styles.otherItems}>
          <div className={styles.menuItem}>
            <i className="fas fa-share-alt"></i>
            &nbsp;
            &nbsp;
            <a>Refer & Earn</a>
          </div>
          <div className={styles.menuItem}>
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            &nbsp;
            <a onClick={signOut}>Logout</a>
          </div>
        </div>
      </MainDrawer>
      <LoaderBackdrop open={loading}>
        <Loader />
      </LoaderBackdrop>
    </>
  )
}

export async function getServerSideProps({req, res}) {
  const { Auth } = withSSRContext({ req });

  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
  } catch (err) {
    console.log(err);
    res.writeHead(302, {Location: '/signup'});
    res.end();
  }
  return {
    props: {}
  }
}

export default Dashboard;