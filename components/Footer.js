import { Container } from '@material-ui/core';
import { Icons, FooterLink } from './MaterialComponents';

import styles from './Footer.module.css';
const Footer = () => {
  return (
    <div id='main-footer'>
      <div className={styles.footerInner}>
        <Container maxWidth='lg' spacing='2'>
          <div className='footer-logo' style={{ paddingTop: '1rem' }}>
            <Icons className='fab fa-facebook fa-2x'></Icons>
            <Icons className='fab fa-instagram fa-2x'></Icons>
            <Icons className='fab fa-twitter fa-2x'></Icons>
            <Icons className='fas fa-envelope fa-2x'></Icons>
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
              &copy; 2020 audifie
            </h5>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
