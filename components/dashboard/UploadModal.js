import React from 'react';
import { PrimaryDialog, PrimaryDialogContent, PrimaryButton, SecondaryButton } from '../MaterialComponents';
import styles from '../../styles/UploadModal.module.css';

function UploadModal({ open, setIsModalOpen }) {
  return (
    <>
      <PrimaryDialog
        open={open} 
        onClose={() => setIsModalOpen(false)}
        maxWidth="md"
        fullWidth={true}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
      >
        <PrimaryDialogContent>
          <div className={styles.uploadArea}>
            <h4 className={styles.uploadText}>Drag & Drop your files here</h4>
            <img src="/assets/svg/uploadFileLogo.svg" className={styles.uploadLogo}/>
          </div>
          <PrimaryButton
            size="small"
            variant="contained"
            style={{marginTop: '2rem', marginLeft: 'auto', marginRight: 'auto'}}
          >
            Browse Files
          </PrimaryButton>
          <SecondaryButton
            size="small"
            variant="contained"
            style={{marginTop: '2rem', marginLeft: 'auto', marginRight: 'auto'}}
            onClick={() => setIsModalOpen(false)}
          >
            &nbsp;&nbsp;&nbsp; Cancel &nbsp;&nbsp;&nbsp;
          </SecondaryButton>
        </PrimaryDialogContent>
      </PrimaryDialog>
    </>
  )
}

export default UploadModal;