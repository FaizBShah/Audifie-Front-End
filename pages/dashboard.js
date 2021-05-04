import React, {useState} from 'react';
import styles from '../styles/Dashboard.module.css';
import { withSSRContext, Auth } from 'aws-amplify';
import { Container, Grid, Link, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { PrimaryButton, MainDrawer, LoaderBackdrop, PrimaryBottomNavigation, PrimaryBottomNavigationAction } from '../components/MaterialComponents';
import { Loader } from '../components/CustomIcons';
import { useWindowDimensions } from '../utils/windowUtils';

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [tabPos, setTabPos] = useState(0);
  const { width } = useWindowDimensions();

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
      <div className={styles.mainArea}>
        <div className={styles.innerArea}>
          {width <= 768 ? (
            <>
              <Link href="/">
                <img src="/assets/svg/logo_linear.svg" className={styles.brandLogo}></img>
              </Link>
              <PrimaryButton
                size="small"
                variant="contained"
                style={{width: width > 425 ? '30%' : '60%', margin: '0 auto'}}
              >
                Upload
              </PrimaryButton>
            </>
          ) : null}
          <div className={styles.emptyArea}>
            <div className={styles.emptyInnerArea}>
              <img src="/assets/svg/uploadAsset.svg" className={styles.uploadImage}></img>
              <p className={styles.uploadText}>Upload Your Documents</p>
            </div>
          </div>
        </div>
      </div>
      {width > 768 ? (
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
              Home
            </div>
            <div className={styles.menuItem}>
              <i className="fas fa-book"></i>
              &nbsp;
              &nbsp;
              Library
            </div>
            <div className={styles.menuItem}>
              <i className="fas fa-dollar-sign"></i>
              &nbsp;
              &nbsp;
              Upgrade
            </div>
            <div className={styles.menuItem}>
              <i className="fas fa-cog"></i>
              &nbsp;
              &nbsp;
              Settings
            </div>
          </div>
          <div className={styles.otherItems}>
            <div className={styles.menuItem}>
              <i className="fas fa-share-alt"></i>
              &nbsp;
              &nbsp;
              Refer & Earn
            </div>
            <div className={styles.menuItem} onClick={signOut}>
              <i className="fas fa-sign-out-alt"></i>
              &nbsp;
              &nbsp;
              Logout
            </div>
          </div>
        </MainDrawer>
      ) : (
        <PrimaryBottomNavigation showLabels value={tabPos} onChange={(e, newVal) => setTabPos(newVal)}>
          <PrimaryBottomNavigationAction label="Home" icon={<i className="fas fa-home"></i>} />
          <PrimaryBottomNavigationAction label="Library" icon={<i className="fas fa-book"></i>} />
          <PrimaryBottomNavigationAction label="Upgrade" icon={<i className="fas fa-dollar-sign"></i>} />
          <PrimaryBottomNavigationAction label="Settings" icon={<i className="fas fa-cog"></i>} />
        </PrimaryBottomNavigation>
      )}
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