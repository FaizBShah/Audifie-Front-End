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
      <PrimaryCard style={{height: width <= 425 ? '10rem' : '15rem'}}>
        <PrimaryCardContent>
          <div className={styles.cardImage} style={{background: "url('/assets/kit/harryPotter.jpg') no-repeat center center/cover"}}></div>
          <div className={styles.mainContent}>

          </div>
        </PrimaryCardContent>
      </PrimaryCard>
    </>
  )
}

export default Card;