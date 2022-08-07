import styles from "./Humidity.module.css";

export const Humidity = () => {
  return (
    <div className={styles.humidity}>
      <p className={styles.title}>Humidity</p>
      <p className={styles.value}>
        84<span>%</span>
      </p>
      {/* progress bar */}
      <div className={styles.percentage}>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className={styles.progress_bar}>
        <div className={styles.progress_bar_fill} style={{ width: "84%" }} />
      </div>
      <div className={styles.percent_symbol}>
        <p>%</p>
      </div>
    </div>
  );
};
