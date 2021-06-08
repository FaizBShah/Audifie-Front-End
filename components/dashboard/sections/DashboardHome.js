import React, { useState, useEffect } from 'react';
import styles from '../../../styles/DashboardScreens/DashboardHome.module.css';
import { useWindowDimensions } from '../../../utils/windowUtils';
import Cards from '../Cards';
import axios from 'axios';
import isEmpty from '../../../utils/validation/is-empty';

function DashboardHome({ user, setLoading, setIsEmpty, uploading }) {
  const [cards, setCards] = useState({});
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!uploading) {
      setLoading(true);

      setTimeout(() => {
        axios.get('https://gt8u1r94bf.execute-api.ap-south-1.amazonaws.com/dev/allfiles', {
          headers: {
            'Authorization': `Bearer ${user.signInUserSession.idToken.jwtToken}`
          }
        })
          .then((res) => {
            console.log(res);
            setIsEmpty(isEmpty(res.data.body.Items));
            setCards(res.data.body.Items);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          })
      }, 1000);
    }
  }, [uploading]);

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