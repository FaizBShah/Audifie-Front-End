import { Container, Link } from '@material-ui/core';
import { NavAppBar, NavToolBar } from '../components/MaterialComponents';
import styles from '../styles/Navbar.module.css';
import { useWindowDimensions } from '../common/windowUtils';

const Navbar = () => {
  const { width } = useWindowDimensions();

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
              <i className="fas fa-bars fa-2x" style={{color: "#fd5457"}}></i>
            </div>
          )}
          
        </NavToolBar>
      </Container>
    </NavAppBar>
  );
};
export default Navbar;
