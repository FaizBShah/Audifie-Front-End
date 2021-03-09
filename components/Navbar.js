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
            style={{
              height: '3rem',
              // width: '10rem',
            }}
          ></img>
          {width >= 769 ? (
            <div className={styles.navLink}>
              <Link href='/'>Sign Up</Link>
              <Link href='/'>Sign In</Link>
            </div>
          ) : (
            <div>
              <i className="fas fa-bars fa-2x" style={{color: "#fd5457"}} onClick={() => toggleDrawer(true)}></i>
              <NavDrawer 
                anchor={'right'} 
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
