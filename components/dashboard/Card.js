import React from 'react';
import {
  PrimaryCard,
  PrimaryCardContent,
} from '../MaterialComponents';
import styles from '../../styles/Card.module.css';
import { useWindowDimensions } from '../../utils/windowUtils';

function Card() {
  const { width } = useWindowDimensions();

  return (
    <>
      <PrimaryCard style={{height: width <= 425 ? '10rem' : '14rem'}}>
        <PrimaryCardContent>
          <div className={styles.cardImage} style={{background: "url('/assets/kit/harryPotter.jpg') no-repeat center center/cover"}}></div>
          <div className={styles.mainContent}>
            <div className={styles.innerContent}>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>Forever is a Lie</h3>
                <div className={styles.info}>
                  <div className={styles.remainingInfo}>
                    <p className={styles.hoursText}>6 Hours Listen</p>
                  </div>
                  <div className={styles.favouriteCheckBox}>
                    <i className="far fa-heart"></i>
                  </div>
                </div>
              </div>
              <div className={styles.cardButtons}>
                <a href="#" className={styles.playButton}><p className={styles.playText}>PLAY</p></a>
                <div className={styles.menuBar}>
                  <i className="fas fa-ellipsis-v"></i>
                </div>
              </div>
            </div>
          </div>
        </PrimaryCardContent>
      </PrimaryCard>
    </>
  )
}

export default Card;