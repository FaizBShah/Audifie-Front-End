import React from 'react';
import styles from '../../styles/Player.module.css';
import ReactPlayer from 'react-player';
import { Container } from '@material-ui/core';

function Player() {
  return (
    <>
      <div className={styles.mainArea}>
        <Container maxWidth="lg" style={{height: "100%"}}>

        </Container>
      </div>
    </>
  )
}

export default Player;