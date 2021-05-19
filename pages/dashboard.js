import React, { useState } from 'react';
import styles from '../styles/Dashboard.module.css';
import { withSSRContext, Auth } from 'aws-amplify';
import { Link } from '@material-ui/core';
import { PrimaryButton, MainDrawer, LoaderBackdrop, PrimaryBottomNavigation, PrimaryBottomNavigationAction } from '../components/MaterialComponents';
import { Loader } from '../components/CustomIcons';
import { useWindowDimensions } from '../utils/windowUtils';
import { UploadIcon, HomeIcon, LibraryIcon, PremiumIcon, SettingsIcon, ShareIcon, LogoutIcon } from '../components/CustomIcons';
import DashboardHome from '../components/dashboard/sections/DashboardHome';
import Library from '../components/dashboard/sections/library/Library';
import EmptyArea from '../components/commons/EmptyArea';

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
        return !isEmpty ? (<DashboardHome />) : (<EmptyArea />);
      case LIBRARY:
        return (<Library />);
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
              {menu === HOME ? (
                <PrimaryButton
                  size="small"
                  variant="contained"
                  style={{ margin: '0 auto' }}
                  startIcon={<i><UploadIcon width="1.125rem" /></i>}
                >
                  Upload
                </PrimaryButton>
              ) : null}
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
              style={{ marginLeft: "1.125rem" }}
              startIcon={<i><UploadIcon width="1rem" /></i>}
            >
              Upload
            </PrimaryButton>
          </div>
          <div className={styles.menu}>
            <div
              className={styles.menuItem}
              style={menu === HOME ? { backgroundColor: 'rgba(255, 227, 227, 0.15)', color: '#FD5457' } : null}
              onClick={() => handleMenuChange(HOME)}
            >
              <i><HomeIcon height="1rem" color={menu === HOME ? '#FD5457' : '#FEFEFE'} /></i>
              &nbsp;
              &nbsp;
              Home
            </div>
            <div
              className={styles.menuItem}
              style={menu === LIBRARY ? { backgroundColor: 'rgba(255, 227, 227, 0.15)', color: '#fd5457' } : null}
              onClick={() => handleMenuChange(LIBRARY)}
            >
              <i><LibraryIcon height="1rem" color={menu === LIBRARY ? '#FD5457' : '#FEFEFE'} /></i>
              &nbsp;
              &nbsp;
              Library
            </div>
            <div
              className={styles.menuItem}
              style={menu === UPGRADE ? { backgroundColor: 'rgba(255, 227, 227, 0.15)', color: '#FFB8B8' } : null}
              onClick={() => handleMenuChange(UPGRADE)}
            >
              <i><PremiumIcon height="1rem" color={menu === UPGRADE ? '#FD5457' : '#FFB8B8'} /></i>
              &nbsp;
              &nbsp;
              Upgrade
            </div>
            <div
              className={styles.menuItem}
              style={menu === SETTINGS ? { backgroundColor: 'rgba(255, 227, 227, 0.15)', color: '#fd5457' } : null}
              onClick={() => handleMenuChange(SETTINGS)}
            >
              <i><SettingsIcon height="1rem" color={menu === SETTINGS ? '#FD5457' : '#FEFEFE'} /></i>
              &nbsp;
              &nbsp;
              Settings
            </div>
          </div>
          <div className={styles.otherItems}>
            <div className={styles.menuItem}>
              <i><ShareIcon height="1rem" color='#CCCCCC' /></i>
              &nbsp;
              &nbsp;
              Refer & Earn
            </div>
            <div className={styles.menuItem} onClick={signOut}>
              <i><LogoutIcon height="1rem" color='#CCCCCC' /></i>
              &nbsp;
              &nbsp;
              Logout
            </div>
          </div>
        </MainDrawer>
      ) : (
        <PrimaryBottomNavigation showLabels value={menu} onChange={(e, newVal) => handleMenuChange(newVal)}>
          <PrimaryBottomNavigationAction label="Home" value={HOME} icon={<i><HomeIcon height="1rem" color={menu === HOME ? '#FD5457' : '#FEFEFE'} /></i>} />
          <PrimaryBottomNavigationAction label="Library" value={LIBRARY} icon={<i><LibraryIcon height="1rem" color={menu === LIBRARY ? '#FD5457' : '#FEFEFE'} /></i>} />
          <PrimaryBottomNavigationAction label="Upgrade" value={UPGRADE} icon={<i><PremiumIcon height="1rem" color={menu === UPGRADE ? '#FD5457' : '#FFB8B8'} /></i>} />
          <PrimaryBottomNavigationAction label="Settings" value={SETTINGS} icon={<i><SettingsIcon height="1rem" color={menu === SETTINGS ? '#FD5457' : '#FEFEFE'} /></i>} />
        </PrimaryBottomNavigation>
      )}
      <LoaderBackdrop open={loading}>
        <Loader />
      </LoaderBackdrop>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req });

  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
  } catch (err) {
    console.log(err);
    res.writeHead(302, { Location: '/signup' });
    res.end();
  }
  return {
    props: {}
  }
}

export default Dashboard;