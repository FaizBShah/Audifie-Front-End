import { Container } from '@material-ui/core';
import { NavAppBar, NavToolBar, NavLink } from '../components/MaterialComponents';

// import styles from '../styles/Navbar.module.css';
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
          <div className="nav-links">
            <NavLink label='&nbsp;Sign Up&nbsp;' />
            <NavLink label='&nbsp;Sign In&nbsp;' />
          </div>
        </NavToolBar>
      </Container>
    </NavAppBar>
  );
};
export default Navbar;
