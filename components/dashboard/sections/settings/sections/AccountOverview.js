import styles from "../Settings.module.scss";

function AccountOverview() {
  return (
    <div className={styles.account__overview}>
      <ul className={styles.details}>
        <li className={styles.details__item}>
          <div className={styles.details__container}>
            <p className={styles.details__text}>Name</p>
          </div>
          <div className={styles.details__container}>
            <p className={styles.details__text}>John Doe</p>
          </div>
        </li>
        <li className={styles.details__item}>
          <div className={styles.details__container}>
            <p className={styles.details__text}>Email</p>
          </div>
          <div className={styles.details__container}>
            <p className={styles.details__text}>john.doe@mail.com</p>
          </div>
        </li>
        <li className={styles.details__item}>
          <div className={styles.details__container}>
            <p className={styles.details__text}>User Name</p>
          </div>
          <div className={styles.details__container}>
            <p className={styles.details__text}>@john_doe</p>
          </div>
        </li>
        <li className={styles.details__item}>
          <div className={styles.details__container}>
            <p className={styles.details__text}>Date of Birth</p>
          </div>
          <div className={styles.details__container}>
            <p className={styles.details__text}>25th June, 1995</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default AccountOverview;
