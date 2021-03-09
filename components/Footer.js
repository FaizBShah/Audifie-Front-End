import { Container } from '@material-ui/core';
import Link from 'next/link';
import { FooterIcon } from './MaterialComponents';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id='main-footer'>
      <div className={styles.footerInner}>
        <Container maxWidth='lg' spacing='2'>
          <div className='footer-logo' style={{ paddingTop: '1rem' }}>
            <a href='#' target='_blank' color=' #1d1d1d'>
              <FooterIcon className='fab fa-facebook fa-2x'></FooterIcon>
            </a>
            <a href='#' target='_blank' color=' #1d1d1d'>
              {' '}
              <FooterIcon className='fab fa-instagram fa-2x'></FooterIcon>
            </a>
            <a href='#' target='_blank' color=' #1d1d1d'>
              {' '}
              <FooterIcon className='fab fa-twitter fa-2x'></FooterIcon>
            </a>
            <a href='#' target='_blank' color=' #1d1d1d'>
              <FooterIcon className='fas fa-envelope fa-2x'></FooterIcon>
            </a>
          </div>
          <div className={styles.company}>
            <Link href='/'>Privacy Policy</Link>
            <Link href='/'>Terms & Conditions</Link>
            <Link href='/'>Support</Link>
            <Link href='/'>About</Link>
          </div>
        </Container>
        <div className={styles.footerOuter}>
          <Container maxWidth='lg'>
            <h5
              style={{
                color: '#fefefe',
                textAlign: 'right',
                lineHeight: '2',
                fontFamily: "'Comfortaa', cursive"
              }}
            >
              Copyright &copy; {year} audifie
            </h5>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Footer;
