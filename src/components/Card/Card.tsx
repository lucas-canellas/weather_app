import imgTest from "../../assets/WeatherTemp.png";
import styles from "./Card.module.css";

export const Card = () => {
  return (
    <div className={styles.card}>
      <h1>Sun, 7 Jun</h1>
      <img src={imgTest} alt="Vasco" />
      <div className={styles.min_max}>
        <p className={styles.min}> 15ºC</p>
        <p className={styles.max}> 11ºC</p>
      </div>
    </div>
  );
};
