import React from 'react';
import { Card, CardContent, Grid, Container } from '@material-ui/core';
import { PrimaryCard } from '../components/MaterialComponents';
import styles from './../styles/Card.module.css';
export default function defaultCard({ defaultCard }) {
  return (
    <div>
      {defaultCard ? (
        <div>
          <Grid container justify='center' style={{ height: '100%' }}>
            <Grid item xs={12} sm={6} md={5}>
              <PrimaryCard className={styles.card}>
                <CardContent className={styles.cardContent}>
                  <img
                    className={styles.referImage}
                    src='/assets/kit/referAsset@10x.png'
                    alt=''
                  />
                  <div className={styles.text}>
                    <h3 className={styles.inviteText}>
                      Invite your friends to use
                    </h3>
                    <p style={{ marginBottom: '0' }}>
                      You'll get to listen{' '}
                      <span className={styles.refer}>1 more book</span>
                    </p>
                    <p style={{ marginTop: '0' }}>when a new friend signup</p>
                  </div>
                </CardContent>
              </PrimaryCard>
            </Grid>
          </Grid>
        </div>
      ) : null}
    </div>
  );
}
