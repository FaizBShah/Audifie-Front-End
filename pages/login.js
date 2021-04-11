import React, {useState} from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.css'
import Footer from '../components/Footer';
import { Container, Grid, Link } from '@material-ui/core';
import {
  PrimaryInput,
  PrimaryButton,
  GoogleButton,
  FacebookButton,
  ErrorNotification,
  LoaderBackdrop,
} from '../components/MaterialComponents';
import { useWindowDimensions } from '../utils/windowUtils';
import { validateSignInInput } from '../utils/validation/validateUtils';
import { Auth } from 'aws-amplify';
import { Loader } from '../components/CustomIcons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const { width } = useWindowDimensions();
  const router = useRouter();

  const handleSignIn = (e) => {
    e.preventDefault();

    setErrors({
      email: '',
      password: ''
    })

    const data = {
      email,
      password
    }
    
    const errorResult = validateSignInInput(data);

    if (!errorResult.isValid) {
      setErrors(errorResult.errors);
      return;
    }

    setLoading(true);

    Auth.signIn(email, password)
      .then((data) => {
        console.log(data);
        setEmail('');
        setPassword('');
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.message);
        setIsErrorVisible(true);
        setLoading(false);
      });
  }

  const handleFederatedSignIn = (e, provider) => {
    e.preventDefault();

    Auth.federatedSignIn({provider})
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(err.message);
        setIsErrorVisible(true);
      });
  }

  const handleErrorClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsErrorVisible(false);
  }

  return (
    <>
      <div className={styles.mainBody}>
        <Container maxWidth="lg" style={{height: "100%"}}>
          <Grid
            container
            direction="row"
            justify="center"
            style={{height: "100%"}}>
              <Grid
                item
                xs={10}
                sm={4}>
                  <div className={styles.innerBody}>
                    <Link href='/'>
                      <img src='/assets/kit/logo_linear.png' className={styles.brandLogo}/>
                    </Link>
                    <div className={styles.formBody}>
                      <form className={styles.form}>
                          <PrimaryInput  
                            type="email" 
                            label="Email" 
                            variant="outlined"
                            style={{marginBottom: "3rem"}}
                            value={email}
                            helperText={errors.email}
                            onChange={(e) => setEmail(e.target.value)}/>
                          <PrimaryInput  
                            type="password" 
                            label="Password" 
                            variant="outlined"
                            style={{marginBottom: "3rem"}}
                            value={password}
                            helperText={errors.password}
                            onChange={(e) => setPassword(e.target.value)}/>
                          <PrimaryButton
                            size="medium"
                            variant="contained"
                            style={{width: "100%"}}
                            onClick={handleSignIn}>
                            Sign In
                          </PrimaryButton>
                        </form>
                        <div className={styles.dividerArea}>
                          <div className={styles.divider}></div>
                          <div className={styles.dividerText}>
                            or Sign in with
                          </div>
                          <div className={styles.divider}></div>
                        </div>
                        <div className={styles.federatedArea}>
                          <GoogleButton
                            startIcon={<img src="/assets/Icons/google.svg" style={{height:'1.15rem'}}/>}
                            size="medium"
                            type="contained"
                            style={{width: "100%", flex: "1", marginBottom: "1rem", marginRight: width > 768 ? "0.5rem" : "0"}}
                            onClick={(e) => handleFederatedSignIn(e, 'Google')}>
                              Google
                          </GoogleButton>
                          <FacebookButton
                            startIcon={<i className="fab fa-facebook"></i>}
                            size="medium"
                            type="contained"
                            style={{width: "100%", flex: "1", marginBottom: "1rem"}}
                            onClick={(e) => handleFederatedSignIn(e, 'Facebook')}>
                              Facebook
                          </FacebookButton>
                        </div>
                        <div className={styles.bottomText}>
                          Don't have an account? <Link href='/signup'>Sign Up here</Link>
                        </div>
                    </div>
                  </div>
              </Grid>
          </Grid>
        </Container>
      </div>
      <ErrorNotification
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={isErrorVisible}
        autoHideDuration={6000}
        onClose={handleErrorClose}
        message={errorMessage}
        action={
          <>
            <i className="far fa-times-circle" onClick={handleErrorClose}></i>
          </>
        }/>
        <LoaderBackdrop open={loading}>
          <Loader />
        </LoaderBackdrop>
      <Footer />
    </>
  )
}

export default Login;