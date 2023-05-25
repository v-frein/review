import styles from "./Logout.module.css";

export const Logout = () => {
  return (
    <div className={styles.container}>
      <p>username</p>
      <p className={styles.logoutButton}>Выйти</p>
    </div>
  );
};
