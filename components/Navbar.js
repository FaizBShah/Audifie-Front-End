import { useState } from 'react';
import { Container, Link, Drawer } from '@material-ui/core';
import { NavAppBar, NavToolBar, NavDrawer } from '../components/MaterialComponents';
import styles from '../styles/Navbar.module.css';
import { useWindowDimensions } from '../common/windowUtils';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { width } = useWindowDimensions();

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  }

  return (
    <NavAppBar title='My App'>
      <Container maxWidth='lg'>
        <NavToolBar>
          <img
            src='/assets/kit/logo_linear.png'
            alt=''
            className='brand-logo'
            style={{
              height: '3rem',
              margin: width <= 768 ? '1.25rem auto' : '0',
            }}
          ></img>
          {width >= 769 ? (
            <div className={styles.navLink}>
              <Link href='/'>Sign Up</Link>
              <Link href='/'>Sign In</Link>
            </div>
          ) : (
            <div>
              <img src="/assets/svg/menu-bars.svg" style={{color: "#fd5457", height: '1.25rem'}} onClick={() => toggleDrawer(true)}></img>
              <NavDrawer 
                anchor={'bottom'} 
                open={isDrawerOpen} 
                onClose={() => toggleDrawer(false)}>
                  <div
                    role="presentation"
                    onClick={() => toggleDrawer(false)}>
                      <div className={styles.navLink}>
                        <Link href='/'>Sign Up</Link>
                        <Link href='/'>Sign In</Link>
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
