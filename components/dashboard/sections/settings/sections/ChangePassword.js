import React from "react";
import styles from "../Settings.module.scss";

const ChangePassword = () => {
  return (
    <div className={styles.account__overview}>
      <h2 className={styles.heading}>Change Password</h2>
      <ul className={styles.details}>
        <div className={styles.form__group}>
          <input
            className={styles.form__input}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <div className={styles.form__group}>
          <input
            className={styles.form__input}
            type="password"
            name="password"
            placeholder="New Password"
          />
        </div>

        <div className={styles.form__group}>
          <input
            className={styles.form__input}
            type="password"
            name="password"
            placeholder="Confirm New Password"
          />
        </div>
      </ul>
    </div>
  );
};

export default ChangePassword;
