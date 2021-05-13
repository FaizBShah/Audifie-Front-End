import React, { useState } from 'react';
import { PrimaryTabs, PrimaryTab } from '../../../MaterialComponents';
import styles from '../../../../styles/DashboardScreens/Library.module.css';
import { useWindowDimensions } from '../../../../utils/windowUtils';

function Library() {
  const [tabValue, setTabValue] = useState(0);
  const { width } = useWindowDimensions();

  const handleTabChange = (e, value) => {
    setTabValue(value);
  }

  return (
    <>
      <div className={styles.tabsContainer}>
        <PrimaryTabs 
          value={tabValue} 
          onChange={handleTabChange} 
          centered={width <= 768} 
          variant={width > 768 ? "standard" : "fullWidth"}
          disableRipple
        >
          <PrimaryTab label="All documents" style={{marginRight: width > 768 ? '4rem' : 'auto'}} />
          <PrimaryTab label="Favourites" />
        </PrimaryTabs>
      </div>
    </>
  )
}

export default Library;