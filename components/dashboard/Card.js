import React, { useState } from 'react';
import {
  PrimaryCard,
  PrimaryCardContent,
} from '../MaterialComponents';
import styles from '../../styles/Card.module.css';
import { useWindowDimensions } from '../../utils/windowUtils';
import { useAppContext } from '../../context/store';
import { selectFile } from '../../actions/fileActions';

function Card({ card, setIsPlayerActive }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { width } = useWindowDimensions();
  const { dispatch } = useAppContext();

  const onPlay = () => {
    if (card.progress !== 'PROCESSING') {
      selectFile(card.fileId, dispatch);
    }
  }

  return (
    <>
      <PrimaryCard style={{height: width <= 425 ? '10rem' : '14rem'}}>
        <PrimaryCardContent>
          <div className={styles.cardImage} style={{background: "url('/assets/kit/harryPotter.jpg') no-repeat center center/cover"}}></div>
          <div className={styles.mainContent}>
            <div className={styles.innerContent}>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.info}>
                  <div className={styles.remainingInfo}>
                    <span className={styles.hoursText}>6 Hours Listen</span>
                  </div>
                  <div className={styles.favouriteCheckBox}>
                    <i className={isFavourite ? "fas fa-heart" : "far fa-heart"} onClick={() => setIsFavourite(!isFavourite)}></i>
                  </div>
                </div>
              </div>
              <div className={styles.cardButtons}>
                <div className={styles.playButton} onClick={onPlay}><p className={styles.playText}>PLAY</p></div>
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