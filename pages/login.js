import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.css'
import Footer from '../components/commons/Footer';
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
import { validateSignInInput, validateEmail, validatePassword, validateCodeInput } from '../utils/validation/validateUtils';
import { Auth } from 'aws-amplify';
import { Loader } from '../components/CustomIcons';
import http from '../services/axiosConfig';
import cookies from 'next-cookies';
import queryString from 'query-string';

const federatedConstants = {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK'
}

const googleURL = queryString.stringify({
  client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
  redirect_uri: 'http://localhost:3000/login',
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ].join(' '), // space seperated string
  response_type: 'code',
  access_type: 'offline',
  prompt: 'consent',
  state: federatedConstants.GOOGLE
});

const facebookURL = queryString.stringify({
  client_id: process.env.NEXT_PUBLIC_FACEBOOK_ID,
  redirect_uri: 'http://localhost:3000/login',
  scope: ['email', 'user_friends'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
  state: federatedConstants.FACEBOOK
});

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailWaiting, setIsEmailWaiting] = useState(false);
  const [isCodeWaiting, setIsCodeWaiting] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { width } = useWindowDimensions();
  const router = useRouter();

  useEffect(() => {
    if (router.query.state) {
      setLoading(true);

      const apiURL = 'api/users/' + (router.query.state === federatedConstants.GOOGLE ? 'googlesignup' : 'fbsignup');
      const { code } = router.query;

      http.post(apiURL, { code })
        .then(() => {
          router
          .push('/dashboard')
          .then(() => {
            setLoading(false);
          })
          .catch((err) => {
            setErrorMessage(err);
            setIsErrorVisible(true);
            setLoading(false);
          });
        })
        .catch((err) => {
          setErrorMessage(err);
          setIsErrorVisible(true);
          setLoading(false);
        });
    }
  }, [])

  const handleSignIn = (e) => {
    e.preventDefault();

    setErrors({});

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

    http.post("api/users/login", { email, password })
      .then((data) => {
        console.log(data);
        setEmail('');
        setPassword('');
        setLoading(false);
        
        router
          .push('/dashboard')
          .then(() => {
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
            setLoading(false);
          })
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err);
        setIsErrorVisible(true);
        setLoading(false);
      });
  }

  const handleForgotPassword = (e) => {
    e.preventDefault();

    setErrors({});

    const errorResult = validateEmail(email);

    if (!errorResult.isValid) {
      setErrors(errorResult.errors);
      return;
    }

    setLoading(true);

    Auth.forgotPassword(email)
      .then((data) => {
        console.log(data);
        setIsEmailWaiting(false);
        setIsCodeWaiting(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.message);
        setIsErrorVisible(true);
        setLoading(false);
      })
  }

  const confirmNewPassword = (e) => {
    e.preventDefault();

    setErrors({});

    const errorPasswordResult = validatePassword(password);
    const errorCodeResult = validateCodeInput(verificationCode);

    if (!errorPasswordResult.isValid || !errorCodeResult.isValid) {
      setErrors({
        password: errorPasswordResult.errors.password,
        code: errorCodeResult.errors.code
      });
      return;
    }

    setLoading(true);

    Auth.forgotPasswordSubmit(email, verificationCode, password)
      .then((data) => {
        console.log(data);
        setEmail('');
        setPassword('');
        setVerificationCode('');
        setIsCodeWaiting(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.message);
        setIsErrorVisible(true);
        setLoading(false);
      })
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
                      {(!isCodeWaiting && !isEmailWaiting) ? (
                        <>
                          <form className={styles.form} style={{marginBottom: "1.5rem"}}>
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
                          <div className={styles.forgotText} onClick={() => setIsEmailWaiting(true)}>
                            Forgot Password?
                          </div>
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
                              href={`https://accounts.google.com/o/oauth2/v2/auth?${googleURL}`}>
                                Google
                            </GoogleButton>
                            <FacebookButton
                              startIcon={<i className="fab fa-facebook"></i>}
                              size="medium"
                              type="contained"
                              style={{width: "100%", flex: "1", marginBottom: "1rem"}}
                              href={`https://www.facebook.com/v4.0/dialog/oauth?${facebookURL}`}>
                                Facebook
                            </FacebookButton>
                          </div>
                          <div className={styles.bottomText}>
                            Don't have an account? <Link href='/signup'>Sign Up here</Link>
                          </div>
                        </>
                      ) : (isCodeWaiting) ? (
                        <>
                          <div className={styles.codeHeading}>
                            <h4>OTP has been sent to your email.</h4>
                            <h4>Enter OTP and New Password</h4>
                          </div>
                          <form className={styles.form} style={{ marginTop: "0" }}>
                            <PrimaryInput
                              type="text"
                              label="Verfication Code"
                              variant="outlined"
                              style={{marginBottom: "2rem"}}
                              value={verificationCode}
                              helperText={errors.code}
                              onChange={(e) => setVerificationCode(e.target.value)}
                            />
                            <PrimaryInput  
                              type="password" 
                              label="New Password" 
                              variant="outlined"
                              value={password}
                              helperText={errors.password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </form>
                          <div className={styles.federatedArea} style={{ display: "block" }}>
                            <PrimaryButton
                              size="medium"
                              type="contained"
                              style={{ width: "100%", marginBottom: "1rem" }}
                              onClick={confirmNewPassword}
                            >
                              Submit
                            </PrimaryButton>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={styles.codeHeading}>
                            <h4>Enter Email</h4>
                          </div>
                          <form className={styles.form} style={{ marginTop: "0" }}>
                            <PrimaryInput  
                              type="email" 
                              label="Email" 
                              variant="outlined"
                              value={email}
                              helperText={errors.email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </form>
                          <div className={styles.federatedArea} style={{ display: "block" }}>
                            <PrimaryButton
                              size="medium"
                              type="contained"
                              style={{ width: "100%", marginBottom: "1rem" }}
                              onClick={handleForgotPassword}
                            >
                              Submit
                            </PrimaryButton>
                          </div>
                        </>
                      )}
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

export async function getServerSideProps(ctx) {
  const { res } = ctx;

  try {
    const { data: { user } } = await http.get("api/users/current", {
      credentials: 'include',
      headers: {
        cookie: cookies(ctx).token ? `token=${cookies(ctx).token};` : null
      }
    });
    console.log(user);
    res.writeHead(302, {Location: '/dashboard'});
    res.end();
  } catch (err) {
    console.log(err);
  }
  return {
    props: {}
  }
}

export default Login;