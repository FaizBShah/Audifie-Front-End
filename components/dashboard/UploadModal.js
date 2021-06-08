import React, { useState, useRef } from 'react';
import { PrimaryDialog, PrimaryDialogContent, PrimaryButton, SecondaryButton, PrimaryProgressBar } from '../MaterialComponents';
import styles from '../../styles/UploadModal.module.css';
import { Storage } from 'aws-amplify';

function UploadModal({ user, open, setIsModalOpen, setIsUploading }) {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      setIsUploading(true);

      Storage.put(`${user.username}/` + file.name, file, {
        level: "private",
        contentType: file.type
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setIsUploading(false);
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setIsUploading(false)
      });
    }
  }

  const onCancel = () => {
    setIsModalOpen(false);
    setLoading(false);
  }

  return (
    <>
      <PrimaryDialog
        open={open} 
        onClose={() => {
          setIsModalOpen(false);
          setLoading(false);
        }}
        maxWidth="md"
        fullWidth={true}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
      >
        <PrimaryDialogContent>
          {!loading ? (
            <>
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
            </>
          ) : (
            <div style={{marginTop: '3rem', marginBottom: '4rem'}}>
              <h3 className={styles.uploadText} style={{color: '#fefefe'}}>Uploading your document...</h3>
              <PrimaryProgressBar />
            </div>
          )}
          <SecondaryButton
            size="small"
            variant="contained"
            style={{marginTop: '2rem', marginLeft: 'auto', marginRight: 'auto'}}
            onClick={onCancel}
          >
            &nbsp;&nbsp;&nbsp; Cancel &nbsp;&nbsp;&nbsp;
          </SecondaryButton>
        </PrimaryDialogContent>
      </PrimaryDialog>
    </>
  )
}

export default UploadModal;