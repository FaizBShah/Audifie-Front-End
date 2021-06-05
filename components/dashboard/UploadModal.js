import React, { useRef } from 'react';
import { PrimaryDialog, PrimaryDialogContent, PrimaryButton, SecondaryButton } from '../MaterialComponents';
import styles from '../../styles/UploadModal.module.css';

function UploadModal({ open, setIsModalOpen }) {
  const fileRef = useRef(null);

  const onBrowseFiles = () => {
    if (fileRef && fileRef.current) {
      fileRef.current.click();
    }
  }

  const onHandleDrag = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  const onHandleFileDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    const dt = e.dataTransfer;
    const file = dt.files[0];

    handleFile(file);
  }

  const handleFile = (file) => {
    if (file.type === 'application/pdf') {
      console.log(file);
    }
  }

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
          <div
            className={styles.uploadArea} 
            onDragEnter={onHandleDrag} 
            onDragOver={onHandleDrag} 
            onDrop={onHandleFileDrop}
          >
            <h4 className={styles.uploadText}>Drag & Drop your files here</h4>
            <img src="/assets/svg/uploadFileLogo.svg" className={styles.uploadLogo}/>
          </div>
          <input
            ref={fileRef} 
            type="file" 
            style={{display: 'none'}} 
            onChange={(e) => handleFile(e.target.files[0])}
          />
          <PrimaryButton
            size="small"
            variant="contained"
            style={{marginTop: '2rem', marginLeft: 'auto', marginRight: 'auto'}}
            onClick={onBrowseFiles}
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