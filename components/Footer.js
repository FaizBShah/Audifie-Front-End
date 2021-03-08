import { Container, Link } from '@material-ui/core';
import { Icons, FooterLink } from './MaterialComponents';

import styles from './Footer.module.css';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id='main-footer'>
      <div className={styles.footerInner}>
        <Container maxWidth='lg' spacing='2'>
          <div className='footer-logo' style={{ paddingTop: '1rem' }}>
            <Link href='#' color=' #1d1d1d'>
              <Icons className='fab fa-facebook fa-2x'></Icons>
            </Link>
            <Link href='#' color=' #1d1d1d'>
              {' '}
              <Icons className='fab fa-instagram fa-2x'></Icons>
            </Link>
            <Link href='#' color=' #1d1d1d'>
              {' '}
              <Icons className='fab fa-twitter fa-2x'></Icons>
            </Link>
            <Link href='#' color=' #1d1d1d'>
              <Icons className='fas fa-envelope fa-2x'></Icons>
            </Link>
          </div>
          <div className='Company'>
            <FooterLink href='#' label='&nbsp;Privacy Policy&nbsp;' />
            <FooterLink href='#' label='&nbsp;Terms & Conditions &nbsp;' />
            <FooterLink href='#' label='&nbsp;Support&nbsp;' />
            <FooterLink href='#' label='&nbsp;About&nbsp;' />
          </div>
        </Container>
        <div className={styles.footerOuter}>
          <Container maxWidth='lg'>
            <h5
              style={{
                color: '#fed4dc',
                textAlign: 'right',
                lineHeight: '2',
              }}
            >
              &copy; {year}
            </h5>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Footer;
