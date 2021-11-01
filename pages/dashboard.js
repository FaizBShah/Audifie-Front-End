import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Dashboard.module.css';
import { withSSRContext, Auth } from 'aws-amplify';
import { Link } from '@material-ui/core';
import { PrimaryButton, MainDrawer, LoaderBackdrop, PrimaryBottomNavigation, PrimaryBottomNavigationAction } from '../components/MaterialComponents';
import { Loader } from '../components/CustomIcons';
import { useWindowDimensions } from '../utils/windowUtils';
import { UploadIcon, HomeIcon, LibraryIcon, PremiumIcon, SettingsIcon, ShareIcon, LogoutIcon } from '../components/CustomIcons';
import DashboardHome from '../components/dashboard/sections/DashboardHome';
import Library from '../components/dashboard/sections/library/Library';
import Player from '../components/player/Player';
import EmptyArea from '../components/commons/EmptyArea';
import UploadModal from '../components/dashboard/UploadModal';
import http from '../services/axiosConfig';
import isEmpty from '../utils/validation/is-empty';
import { useAppContext } from '../context/store';
import { selectFile } from '../actions/fileActions';
import Settings from '../components/dashboard/sections/settings/Settings';
import cookies from 'next-cookies';

const menuConstants = {
  HOME: 'home',
  LIBRARY: 'library',
  UPGRADE: 'upgrade',
  SETTINGS: 'settings'
};

function Dashboard({ user }) {
  const { HOME, LIBRARY, UPGRADE, SETTINGS } = menuConstants;
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [menu, setMenu] = useState(HOME);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setIsUploading] = useState(false);
  const [cards, setCards] = useState({});
  const [isSmallPlayer, setIsSmallPlayer] = useState(false);
  const { sharedState: { file }, dispatch } = useAppContext();
  
  const { width } = useWindowDimensions();
  const router = useRouter();

  useEffect(() => {
    if (!uploading) {
      // setLoading(true);

      // setTimeout(() => {
      //   // 'https://gt8u1r94bf.execute-api.ap-south-1.amazonaws.com/dev/allfiles'
      //   http.get('https://dev/allfiles', {
      //     headers: {
      //       'Authorization': `Bearer ${user.signInUserSession.idToken.jwtToken}`
      //     }
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     setEmpty(isEmpty(res.data.body.Items));
      //     setCards(res.data.body.Items);
      //     setLoading(false);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     setLoading(false);
      //   })
      // }, 2000);
    }
  }, [uploading]);

  useEffect(() => {
    if (router.query.area) {
      setMenu(router.query.area);
    }
    if (router.query.player) {
      selectFile(router.query.player, dispatch);
    }
    if (router.query.small) {
      setIsSmallPlayer(router.query.small);
    }
  }, [])

  useEffect(() => {
    if (menu) {
      const routerUrl = file ? (
          isSmallPlayer ? `?area=${menu}&player=${file}&small=${isSmallPlayer}` : 
            `?area=${menu}&player=${file}`
        ) : `?area=${menu}`;
      router.push(routerUrl, undefined, { shallow: true })
    }
  }, [menu, file, isSmallPlayer])

  // Function to render different menu screens
  const renderMenu = (value) => {
    switch (value) {
      case HOME:
        return !empty ? (
          <DashboardHome cards={cards.length > 6 ? cards.slice(0, 6) : cards} />
        ) : (<EmptyArea />);
      case LIBRARY:
        return (<Library cards={cards} />);
      case SETTINGS:
        return (<Settings />);
      default:
        return null;
    }
  }

  const signOut = (e) => {
    e.preventDefault();

    setLoading(true);

    http.post('api/users/logout')
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
    if (file) {
      setIsSmallPlayer(true);
    }
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
                  onClick={() => setIsModalOpen(true)}
                >
                  Upload
                </PrimaryButton>
              ) : null}
            </>
          ) : null}
          {renderMenu(menu)}
        </div>
      </div>
      {file && (
        <div className={!isSmallPlayer ? styles.playerLargeArea : styles.playerSmallArea}>
          <Player isSmallPlayer={isSmallPlayer} setIsSmallPlayer={setIsSmallPlayer}/>
        </div>
      )}
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
              onClick={() => setIsModalOpen(true)}
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
      ) : !(file && !isSmallPlayer) ? (
        <PrimaryBottomNavigation showLabels value={menu} onChange={(e, newVal) => handleMenuChange(newVal)}>
          <PrimaryBottomNavigationAction label="Home" value={HOME} icon={<i><HomeIcon height="1rem" color={menu === HOME ? '#FD5457' : '#FEFEFE'} /></i>} />
          <PrimaryBottomNavigationAction label="Library" value={LIBRARY} icon={<i><LibraryIcon height="1rem" color={menu === LIBRARY ? '#FD5457' : '#FEFEFE'} /></i>} />
          <PrimaryBottomNavigationAction label="Upgrade" value={UPGRADE} icon={<i><PremiumIcon height="1rem" color={menu === UPGRADE ? '#FD5457' : '#FFB8B8'} /></i>} />
          <PrimaryBottomNavigationAction label="Settings" value={SETTINGS} icon={<i><SettingsIcon height="1rem" color={menu === SETTINGS ? '#FD5457' : '#FEFEFE'} /></i>} />
        </PrimaryBottomNavigation>
      ) : null}
      <UploadModal user={user} open={isModalOpen} setIsModalOpen={setIsModalOpen} setIsUploading={setIsUploading} />
      <LoaderBackdrop open={loading}>
        <Loader />
      </LoaderBackdrop>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { req, res } = ctx;

  try {
    const { data: { user } } = await http.get("api/users/current", {
      credentials: 'include',
      headers: {
        cookie: cookies(ctx).token ? `token=${cookies(ctx).token};` : null
      }
    });
    console.log(user);
    return {
      props: {
        user
      }
    }
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