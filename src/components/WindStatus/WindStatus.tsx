import NavigationIcon from "@mui/icons-material/Navigation";

import styles from "./WindStatus.module.css";

export const WindStatus = () => {
  return (
    <div className={styles.wind_status}>
      <p className={styles.title}>Wind status</p>
      <p className={styles.value}>
        7<span>mph</span>
      </p>
      <div>
        <div className={styles.icon_navigation}>
          <NavigationIcon className={styles.icon} />
        </div>
        <p className={styles.direction_text}>WSW</p>
      </div>
    </div>
  );
};
