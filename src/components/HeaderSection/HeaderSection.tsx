import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import imgTest from "../../assets/WeatherTemp.png";
import styles from "./HeaderSection.module.css";

export const HeaderSection = () => {
  return (
    <div className={styles.header}>
      <div className={styles.search_location}>
        <button className={styles.search}>Search for places</button>
        <button className={styles.location}>
          <GpsFixedIcon />
        </button>
      </div>
      <div className={styles.bg_cloud}>
        <img src={imgTest} alt="Test Temp" />
      </div>
      <div className={styles.weather_info}>
        <p className={styles.degree}>
          15<span>ºC</span>
        </p>
        <p className={styles.weather}>Shower</p>
        <p className={styles.day}>Today • Fri, 5 Jun</p>
        <div className={styles.city}>
          <LocationOnIcon />
          <p>Helsinki</p>
        </div>
      </div>
    </div>
  );
};
