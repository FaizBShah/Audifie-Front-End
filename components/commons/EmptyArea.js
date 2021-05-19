import React from 'react';
import styles from '../../styles/EmptyArea.module.css';

function EmptyArea() {
  return (
    <>
      <div className={styles.emptyArea}>
        <div className={styles.emptyInnerArea}>
          <img src="/assets/svg/uploadAsset.svg" className={styles.uploadImage}></img>
          <p className={styles.uploadText}>Upload Your Documents</p>
        </div>
      </div>
    </>
  )
}

export default EmptyArea;