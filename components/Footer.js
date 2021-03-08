import { Container } from '@material-ui/core';
import { FooterIcon, FooterLink } from './MaterialComponents';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div id='main-footer'>
      <div className={styles.footerInner}>
        <Container maxWidth='lg' spacing='2'>
          <div className='footer-logo' style={{ paddingTop: '1rem' }}>
            <FooterIcon className='fab fa-facebook fa-2x'></FooterIcon>
            <FooterIcon className='fab fa-instagram fa-2x'></FooterIcon>
            <FooterIcon className='fab fa-twitter fa-2x'></FooterIcon>
            <FooterIcon className='fas fa-envelope fa-2x'></FooterIcon>
          </div>
          <div className='Company'>
            <FooterLink label='&nbsp;Privacy Policy&nbsp;' />
            <FooterLink label='&nbsp;Terms & Conditions &nbsp;' />
            <FooterLink label='&nbsp;Support&nbsp;' />
            <FooterLink label='&nbsp;About&nbsp;' />
          </div>
        </Container>
        <div className={styles.footerOuter}>
          <Container maxWidth='lg'>
            <h5 style={{ color: '#fed4dc', textAlign: 'right' }}>
              &copy; 2021 audifie
            </h5>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
