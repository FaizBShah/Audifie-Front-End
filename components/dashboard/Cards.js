import React from 'react';
import styles from '../../styles/Cards.module.css';
import { Grid } from '@material-ui/core';
import Card from './Card';

function Cards() {
  return (
    <>
      <div className={styles.cardsSection}>
        <Grid
          container
          direction="row"
          justify="space-around"
          spacing={4}
          style={{height: '100%'}}
        >
          <Grid
            item
            lg={4}
            md={6}
            sm={10}
            xs={12}
          >
            <Card />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            sm={10}
            xs={12}
          >
            <Card />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            sm={10}
            xs={12}
          >
            <Card />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Cards;