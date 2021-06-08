import React, { useState } from 'react';
import { PrimaryTabs, PrimaryTab } from '../../../MaterialComponents';
import styles from '../../../../styles/DashboardScreens/Library.module.css';
import { useWindowDimensions } from '../../../../utils/windowUtils';
import AllDocuments from './AllDocuments';
import Favourites from './Favourites';

function Library({ user, cards }) {
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
      <div className={styles.mainArea}>
        {tabValue === 0 ? <AllDocuments cards={cards} /> : <Favourites cards={cards} />}
      </div>
    </>
  )
}

export default Library;