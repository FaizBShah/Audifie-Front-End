import React, { useState } from "react";
import styles from "../Settings.module.scss";

const EditProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={styles.account__overview}>
      <h2 className={styles.heading}>Edit Profile</h2>
      <ul className={styles.details}>
        <li className={styles.details__item}>
          <div className={styles.details__container}>
            <p className={styles.details__text}>Name</p>
          </div>
          <div className={styles.details__container__text}>
            {isEdit ? (
              <div className={styles.form__group}>
                <input
                  className={styles.form__input}
                  type="text"
                  name="Name"
                  placeholder="Name"
                />
              </div>
            ) : (
              <div className={styles.details__container__text}>
                <p className={styles.details__text}>john.doe@mail.com</p>
              </div>
            )}
          </div>
        </li>
        <li className={styles.details__item}>
          <div className={styles.details__container}>
            <p className={styles.details__text}>Email</p>
          </div>
          <div className={styles.details__container__text}>
            <p className={styles.details__text}>john.doe@mail.com</p>
          </div>
        </li>
        <li className={styles.details__item}>
          <div className={styles.details__container}>
            <p className={styles.details__text}>User Name</p>
          </div>
          <div className={styles.details__container__text}>
            <p className={styles.details__text}>@john_doe</p>
          </div>
        </li>
        <li className={styles.details__item}>
          <div className={styles.details__container}>
            <p className={styles.details__text}>Date of Birth</p>
          </div>
          <div className={styles.details__container__text}>
            <p className={styles.details__text}>25th June, 1995</p>
          </div>
        </li>
      </ul>
      <button onClick={() => setIsEdit(!isEdit)}>Save</button>
    </div>
  );
};

export default EditProfile;
