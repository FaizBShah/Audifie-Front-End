import React from 'react';
import styles from '../../styles/Cards.module.css';
import { Grid } from '@material-ui/core';
import Card from './Card';

function Cards({ cards }) {
  return (
    <>
      <div className={styles.cardsSection}>
        <Grid
          container
          direction="row"
          justify={cards.length < 3 ? "left" : "center"}
          spacing={4}
          style={{height: '100%'}}
        >
          {cards.map((card, index) => {
            return (
              <Grid item lg={4} md={6} sm={10} xs={12} key={index}>
                <Card card={card} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
}

export default Cards;