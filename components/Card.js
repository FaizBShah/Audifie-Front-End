import React from 'react';
import {
  PrimaryCard,
  PrimaryCardContent,
  CardSlider
} from '../components/MaterialComponents';
import styles from './../styles/Card.module.css';

function Card({ defaultCard }) {

  return (
    <>
      {defaultCard ? (
        <PrimaryCard>
          <PrimaryCardContent>
            <img
              className={styles.referImage}
              src='/assets/svg/referAsset.svg'
              alt=''
            />
            <div className={styles.inviteSection}>
              <h3 className={styles.inviteHeading}>Invite your friends to use</h3>
              <p className={styles.invitePara}>
                You'll get to listen <span className={styles.highlightedText}>1 more book </span>when a new friend signup
              </p>
            </div>
          </PrimaryCardContent>
        </PrimaryCard>
      ) : (
        <PrimaryCard>
          <PrimaryCardContent>
            <img
              className={styles.bookImage}
              src='/assets/kit/harryPotter.jpg'
              alt=''
            />
            <div className={styles.bookDetails}>
              <h3 className={styles.bookTitle}>Harry Potter : Goblet of Fire</h3>
              <div className={styles.slider}>
                <CardSlider
                  style={{padding:'0'}}
                  value={50}
                  aria-labelledby='continuous-slider'
                />
              </div>
              <div className={styles.bottomText}>
                <p className={styles.bookHistory}>Last Played : 1 Day Ago</p>
                <div className={styles.delete}>
                  <i className='fas fa-trash' style={{cursor: 'pointer'}}></i>
                </div>
              </div>
            </div>
          </PrimaryCardContent>
        </PrimaryCard>
      )}
    </>
  );
}

export default Card;