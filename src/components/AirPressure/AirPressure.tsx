import styles from "./AirPressure.module.css";

export const AirPressure = () => {
  return (
    <div className={styles.air_pressure}>
      <h1 className={styles.title}>AirPressure</h1>
      <p className={styles.value}>
        998 <span>mb</span>
      </p>
    </div>
  );
};
