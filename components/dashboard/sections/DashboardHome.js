import React from 'react';
import styles from '../../../styles/DashboardScreens/DashboardHome.module.css';
import { Grid } from '@material-ui/core';
import { useWindowDimensions } from '../../../utils/windowUtils';
import Card from '../Card';

function DashboardHome() {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className={styles.mainArea}>
        {width > 768 ? (<h4 className={styles.mainHeading}>Your recent files</h4>) : null}
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
      </div>
    </>
  )
}

export default DashboardHome;