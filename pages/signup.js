import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.css';
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
import { validateSignUpInput, validateCodeInput } from '../utils/validation/validateUtils';
import { Auth } from 'aws-amplify';
import { Loader } from '../components/CustomIcons';
import http from '../services/axiosConfig';
import cookies from 'next-cookies';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isCodeWaiting, setIsCodeWaiting] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { width } = useWindowDimensions();
  const router = useRouter();

  useEffect(() => {
    if (router.query.confirmSignUp) {
      setIsCodeWaiting(router.query.confirmSignUp);
      setEmail(router.query.email);
    }
  }, [])

  useEffect(() => {
    if (isCodeWaiting === true) {
      router.push(`?confirmSignUp=${isCodeWaiting}&email=${email}`, undefined, { shallow: true });
    }
  }, [isCodeWaiting])

  const handleSignUp = (e) => {
    e.preventDefault();

    setErrors({});

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    const errorResult = validateSignUpInput(data);

    if (!errorResult.isValid) {
      setErrors(errorResult.errors);
      return;
    }

    setLoading(true);

    http.post("http://localhost:5000/api/users/signup", { email, name, password, confirmPassword })
      .then((data) => {
        console.log(data);
        setIsCodeWaiting(true);
        setPassword('');
        setConfirmPassword('');
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err);
        setIsErrorVisible(true);
        setLoading(false);
      });
  }

  const confirmSignUp = (e) => {
    e.preventDefault();

    setErrors({});

    const errorResult = validateCodeInput(verificationCode);

    if (!errorResult.isValid) {
      setErrors(errorResult.errors);
      return;
    }

    setLoading(true);

    http.post("http://localhost:5000/api/users/verify-email", { email, verificationCode })
      .then((data) => {
        console.log(data);
        setIsCodeWaiting(false);
        setEmail('');
        setName('');
        setVerificationCode('');

        router
          .push('/login')
          .then(() => {
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err);
        setIsErrorVisible(true);
        setLoading(false);
      });
  }

  const resendCode = (e) => {
    e.preventDefault();

    Auth.resendSignUp(email)
      .then(() => {
        console.log('code resent successfully');
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(err.message);
        setIsErrorVisible(true);
      });
  }

  const handleFederatedSignIn = (e, provider) => {
    e.preventDefault();

    Auth.federatedSignIn({ provider })
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
    setErrorMessage('');
  }

  return (
    <>
      <div className={styles.mainBody}>
        <Container maxWidth="lg" style={{ height: "100%" }}>
          <Grid
            container
            direction="row"
            justify="center"
            style={{ height: "100%" }}
          >
            <Grid 
              item 
              xs={10} 
              sm={4}>
              <div className={styles.innerBody}>
                <Link href="/">
                  <img src="/assets/kit/logo_linear.png" className={styles.brandLogo}/>
                </Link>
                <div className={styles.formBody}>
                  {!isCodeWaiting ? (
                    <>
                      <form className={styles.form}>
                        <PrimaryInput
                          type="text"
                          label="Name"
                          variant="outlined"
                          style={{ marginBottom: "2rem" }}
                          value={name}
                          helperText={errors.name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <PrimaryInput
                          type="email"
                          label="Email"
                          variant="outlined"
                          style={{ marginBottom: "2rem" }}
                          value={email}
                          helperText={errors.email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <PrimaryInput
                          type="password"
                          label="Password"
                          variant="outlined"
                          style={{ marginBottom: "2rem" }}
                          value={password}
                          helperText={errors.password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <PrimaryInput
                          type="password"
                          label="Confirm Password"
                          variant="outlined"
                          style={{ marginBottom: "2rem" }}
                          value={confirmPassword}
                          helperText={errors.confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <PrimaryButton
                          size="medium"
                          variant="contained"
                          style={{ width: "100%" }}
                          onClick={handleSignUp}
                        >
                          Sign Up
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
                          startIcon={<img src="/assets/Icons/google.svg" style={{ height: "1.15rem" }}/>}
                          size="medium"
                          type="contained"
                          style={{
                            width: "100%",
                            flex: "1",
                            marginBottom: "1rem",
                            marginRight: width > 768 ? "0.5rem" : "0",
                          }}
                          onClick={(e) => handleFederatedSignIn(e, 'Google')}
                        >
                          Google
                        </GoogleButton>
                        <FacebookButton
                          startIcon={<i className="fab fa-facebook"></i>}
                          size="medium"
                          type="contained"
                          style={{
                            width: "100%",
                            flex: "1",
                            marginBottom: "1rem",
                          }}
                          onClick={(e) => handleFederatedSignIn(e, 'Facebook')}
                        >
                          Facebook
                        </FacebookButton>
                      </div>
                      <div className={styles.bottomText}>
                        Already have an account? <Link href='/login'>Sign In here</Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.codeHeading}>
                        <h4>OTP has been sent to your email.</h4>
                        <h4>Enter OTP</h4>
                      </div>
                      <form className={styles.form} style={{ marginTop: "0" }}>
                        <PrimaryInput
                          type="text"
                          label="Verfication Code"
                          variant="outlined"
                          value={verificationCode}
                          helperText={errors.code}
                          onChange={(e) => setVerificationCode(e.target.value)}
                        />
                      </form>
                      <div className={styles.federatedArea} style={{ display: "block" }}>
                        <PrimaryButton
                          size="medium"
                          type="contained"
                          style={{ width: "100%", marginBottom: "1rem" }}
                          onClick={confirmSignUp}
                        >
                          Submit
                        </PrimaryButton>
                        <PrimaryButton
                          size="medium"
                          type="contained"
                          style={{ width: "100%", marginBottom: "1rem" }}
                          onClick={resendCode}
                        >
                          Resend Code
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
          horizontal: 'right',
        }}
        open={isErrorVisible}
        autoHideDuration={6000}
        onClose={handleErrorClose}
        message={errorMessage}
        action={
          <>
            <i className="far fa-times-circle" onClick={handleErrorClose}></i>
          </>
        }
      />
      <LoaderBackdrop open={loading}>
        <Loader />
      </LoaderBackdrop>
      <Footer />
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { req, res } = ctx;

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

export default Signup;