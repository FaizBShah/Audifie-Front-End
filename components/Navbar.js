import { useState } from 'react';
import { Container, Link } from '@material-ui/core';
import {
  NavAppBar,
  NavToolBar,
  NavDrawer,
} from '../components/MaterialComponents';
import styles from '../styles/Navbar.module.css';
import { useWindowDimensions } from '../common/windowUtils';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { width } = useWindowDimensions();

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  return (
    <NavAppBar>
      <Container maxWidth='lg'>
        <NavToolBar>
          <Link href='/' style={{display: 'flex', alignItems: 'center'}}>
            <img
              src='/assets/kit/logo_linear.png'
              alt=''
              className={styles.brandLogo}
              style={{
                height: '3rem',
                margin: width <= 768 ? '1.25rem auto' : '0',
              }}
            ></img>
          </Link>

          {width >= 769 ? (
            <div className={styles.navLink}>
              <Link href='/signup'>Sign Up</Link>
              <Link href='/login'>Sign In</Link>
            </div>
          ) : (
            <div>
              <img
                src='/assets/svg/menu-bars.svg'
                style={{ color: '#fd5457', height: '1.25rem' }}
                onClick={() => toggleDrawer(true)}
              ></img>
              <NavDrawer
                anchor={'bottom'}
                open={isDrawerOpen}
                onClose={() => toggleDrawer(false)}
              >
                <div role='presentation' onClick={() => toggleDrawer(false)}>
                  <div className={styles.navLink}>
                    <Link href='/signup'>Sign Up</Link>
                    <Link href='/login'>Sign In</Link>
                  </div>
                </div>
              </NavDrawer>
            </div>
          )}
        </NavToolBar>
      </Container>
    </NavAppBar>
  );
};
export default Navbar;
