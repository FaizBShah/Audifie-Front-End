import React from 'react';
import { Grid, Slider } from '@material-ui/core';
import {
  PrimaryCard,
  PrimaryCardContent,
} from '../components/MaterialComponents';
import styles from './../styles/Card.module.css';

 function Card({ defaultCard }) {
const [value, setValue] = React.useState(50);
  return (
    <React.Fragment>
      {defaultCard ? (
        <div>
          <Grid container justify='center' style={{ height: '100%' }}>
            <Grid item xs={10} sm={7} md={5} lg={5}>
              <PrimaryCard className={styles.card}>
                <PrimaryCardContent>
                  <img
                    className={styles.referImage}
                    src='/assets/svg/referAsset.svg'
                    alt=''
                  />
                  <div className={styles.inviteSection}>
                    <h3 className={styles.inviteHeading}>
                      Invite your friends to use
                    </h3>
                    <p className={styles.invitePara}>
                      You'll get to listen{' '}
                      <span className={styles.highlightedText}>1 more book </span>
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
            <Grid item xs={10} sm={7} md={5} lg={5}>
              <PrimaryCard className={styles.card}>
                <PrimaryCardContent style={{ position: 'relative' }}>
                  <img
                    className={styles.bookImage}
                    src='/assets/kit/harryPotter.jpg'
                    alt=''
                  />
                  <div className={styles.bookDetails}>
                    <h3 className={styles.bookTitle}>
                      Harry Potter : Goblet of Fire
                    </h3>
                    <div className={styles.slider}>
                      <Slider
                      style={{padding:'0'}}
                        value={value}
                        aria-labelledby='continuous-slider'
                      />
                    </div>

                    <div className={styles.textIcon}>
                      <p className={styles.bookHistory}>Last Played : 1 Day Ago</p>
                      <div className={styles.deleteIcon}>
                      <i class='fas fa-trash '></i>
                      </div>
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
export default Card
