import styles from "./Visibility.module.css";

export const Visibility = () => {
  return (
    <div className={styles.visibility}>
      <h1 className={styles.title}>Visibility</h1>
      <p className={styles.value}>
        6,4 <span>miles</span>
      </p>
    </div>
  );
};
