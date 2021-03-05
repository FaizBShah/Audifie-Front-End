import { Container } from '@material-ui/core';
import { App_Bar, Tool_Bar, Link } from '../components/MaterialComponents';

import styles from '../styles/Navbar.module.css';
const Navbar = () => {
  return (
    <App_Bar title='My App'>
      <Container maxWidth='lg'>
        <Tool_Bar>
          <img
            src='/assets/kit/logo_linear.png'
            alt=''
            style={{
              height: '3rem',
              width: '10rem',
            }}
          ></img>
          <div>
            <Link label='&nbsp;Sign Up&nbsp;' />
            <Link label='&nbsp;Sign In&nbsp;' />
          </div>
        </Tool_Bar>
      </Container>
    </App_Bar>
  );
};
export default Navbar;
