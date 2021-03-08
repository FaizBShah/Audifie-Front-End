import { Container, Link } from '@material-ui/core';
import { NavAppBar, NavToolBar } from '../components/MaterialComponents';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
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
          <div className={styles.navLink}>
            <Link href='/'>Sign Up</Link>
            <Link href='/'>Sign In</Link>
          </div>
        </NavToolBar>
      </Container>
    </NavAppBar>
  );
};
export default Navbar;
