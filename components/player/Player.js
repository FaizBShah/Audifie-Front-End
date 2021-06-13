import React from 'react';
import styles from '../../styles/Player.module.css';
import ReactPlayer from 'react-player';
import { Container } from '@material-ui/core';

function Player() {
  return (
    <>
      <div className={styles.mainArea}>
        <Container maxWidth="lg" style={{height: "100%"}}>
          <div className={styles.innerArea}>
            <div className={styles.nameArea}>
              <h3 className={styles.title}>
                <span><i style={{display: "inline-block", marginLeft: "-4rem", cursor: "pointer"}} className={"fas fa-chevron-down"}></i></span>
                {' '}
                &nbsp;
                &nbsp;
                Forever is True
              </h3>
            </div>
            <div className={styles.imageArea}>
              <img className={styles.playerImage} style={{background: "url('/assets/kit/harryPotter.jpg') no-repeat center center/cover"}} />
            </div>
            <div className={styles.controlArea}>

            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Player;