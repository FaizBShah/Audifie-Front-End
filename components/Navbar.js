import navStyles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { Container } from '@material-ui/core';

// import nav_logo from '../public/assets/kit/logo_linear.png';
const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <Container className={navStyles.container}>
        <img
          src='/assets/kit/logo_linear.png'
          alt=''
          style={{
            height: '75px',
            width: '175px',
          }}
        ></img>
        <ul>
          <li>
            <Link href='#'>Sign Up</Link>
          </li>
          <li>
            <Link href='#'>Sign In</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
