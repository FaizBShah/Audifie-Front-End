import React, {useState} from 'react';
import styles from '../styles/Dashboard.module.css';
import { withSSRContext, Auth } from 'aws-amplify';
import { Link } from '@material-ui/core';
import { PrimaryButton, MainDrawer, LoaderBackdrop, PrimaryBottomNavigation, PrimaryBottomNavigationAction } from '../components/MaterialComponents';
import { Loader } from '../components/CustomIcons';
import { useWindowDimensions } from '../utils/windowUtils';
import DashboardHome from '../components/dashboard/sections/DashboardHome';

const menuConstants = {
  HOME: 'home',
  LIBRARY: 'library',
  UPGRADE: 'upgrade',
  SETTINGS: 'settings'
};

function Dashboard() {
  const { HOME, LIBRARY, UPGRADE, SETTINGS } = menuConstants;
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [menu, setMenu] = useState(HOME);
  const { width } = useWindowDimensions();

  // Function to render different menu screens
  const renderMenu = (value) => {
    switch (value) {
      case HOME:
        return !isEmpty ? (<DashboardHome />) : (
          <div className={styles.emptyArea}>
            <div className={styles.emptyInnerArea}>
              <img src="/assets/svg/uploadAsset.svg" className={styles.uploadImage}></img>
              <p className={styles.uploadText}>Upload Your Documents</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

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

  const handleMenuChange = (value) => {
    setMenu(value);
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
          {renderMenu(menu)} 
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
            <div
              className={styles.menuItem}
              style={menu === HOME ? {backgroundColor: 'rgba(255, 243, 243, 0.15)', color: '#fd5457'} : null}
              onClick={() => handleMenuChange(HOME)}
            >
              <i className="fas fa-home"></i>
              &nbsp;
              &nbsp;
              Home
            </div>
            <div
              className={styles.menuItem}
              style={menu === LIBRARY ? {backgroundColor: 'rgba(255, 243, 243, 0.15)', color: '#fd5457'} : null}
              onClick={() => handleMenuChange(LIBRARY)}
            >
              <i className="fas fa-book"></i>
              &nbsp;
              &nbsp;
              Library
            </div>
            <div
              className={styles.menuItem}
              style={menu === UPGRADE ? {backgroundColor: 'rgba(255, 243, 243, 0.15)', color: '#fd5457'} : null}
              onClick={() => handleMenuChange(UPGRADE)}
            >
              <i className="fas fa-dollar-sign"></i>
              &nbsp;
              &nbsp;
              Upgrade
            </div>
            <div
              className={styles.menuItem}
              style={menu === SETTINGS ? {backgroundColor: 'rgba(255, 243, 243, 0.15)', color: '#fd5457'} : null}
              onClick={() => handleMenuChange(SETTINGS)}
            >
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
        <PrimaryBottomNavigation showLabels value={menu} onChange={(e, newVal) => handleMenuChange(newVal)}>
          <PrimaryBottomNavigationAction label="Home" value={HOME} icon={<i className="fas fa-home"></i>} />
          <PrimaryBottomNavigationAction label="Library" value={LIBRARY} icon={<i className="fas fa-book"></i>} />
          <PrimaryBottomNavigationAction label="Upgrade" value={UPGRADE} icon={<i className="fas fa-dollar-sign"></i>} />
          <PrimaryBottomNavigationAction label="Settings" value={SETTINGS} icon={<i className="fas fa-cog"></i>} />
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