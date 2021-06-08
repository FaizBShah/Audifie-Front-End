import React, { useState, useEffect } from 'react';
import styles from '../../../styles/DashboardScreens/DashboardHome.module.css';
import { useWindowDimensions } from '../../../utils/windowUtils';
import Cards from '../Cards';
import isEmpty from '../../../utils/validation/is-empty';

function DashboardHome({ user, cards }) {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className={styles.mainArea}>
        {width > 768 ? (<h3 className={styles.mainHeading}>Your recent files</h3>) : null}
        {!isEmpty(cards) && <Cards cards={cards} />}
      </div>
    </>
  )
}

export default DashboardHome;