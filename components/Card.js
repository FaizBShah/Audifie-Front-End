import React from 'react';
import { Card, CardContent, Grid, Container, Slider } from '@material-ui/core';
import {
  PrimaryCard,
  PrimaryCardContent,
} from '../components/MaterialComponents';
import styles from './../styles/Card.module.css';
export default function defaultCard({ defaultCard }) {
  const [value, setValue] = React.useState(50);
  return (
    <React.Fragment>
      {defaultCard ? (
        <div>
          <Grid container justify='center' style={{ height: '100%' }}>
            <Grid item xs={12} sm={6} md={5}>
              <PrimaryCard className={styles.card}>
                <PrimaryCardContent>
                  <img
                    className={styles.referImage}
                    src='/assets/svg/referAsset.svg'
                    alt=''
                  />
                  <div className={styles.text}>
                    <h3 className={styles.inviteText}>
                      Invite your friends to use
                    </h3>
                    <p style={{ marginBottom: '0' }}>
                      You'll get to listen{' '}
                      <span className={styles.refer}>1 more book </span>
                      when a new friend signup
                    </p>
                  </div>
                </PrimaryCardContent>
              </PrimaryCard>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>
          <Grid container justify='center' style={{ height: '100%' }}>
            <Grid item xs={12} sm={6} md={5}>
              <PrimaryCard className={styles.card}>
                <PrimaryCardContent>
                  <img
                    className={styles.referImage}
                    src='/assets/kit/harryPotter.jpg'
                    alt=''
                  />
                  <div className={styles.text}>
                    <h3 className={styles.title}>
                      Harry Potter : Goblet of Fire
                    </h3>
                    <div className={styles.slider}>
                      <Slider
                        value={value}
                        aria-labelledby='continuous-slider'
                      />
                    </div>
                    <div className={styles.textIcon}>
                      <p style={{ margin: '0' }}>Last Played : 1 Day Ago</p>
                      <i class='fas fa-trash'></i>
                    </div>
                  </div>
                </PrimaryCardContent>
              </PrimaryCard>
            </Grid>
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}
