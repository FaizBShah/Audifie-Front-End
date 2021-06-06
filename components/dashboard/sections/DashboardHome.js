import React from 'react';
import styles from '../../../styles/DashboardScreens/DashboardHome.module.css';
import { useWindowDimensions } from '../../../utils/windowUtils';
import Cards from '../Cards';

function DashboardHome({ user }) {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className={styles.mainArea}>
        {width > 768 ? (<h3 className={styles.mainHeading}>Your recent files</h3>) : null}
        <Cards />
      </div>
    </>
  )
}

export default DashboardHome;