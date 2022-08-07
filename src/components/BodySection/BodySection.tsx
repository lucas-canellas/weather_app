import { AirPressure } from "../AirPressure/AirPressure";
import { Card } from "../Card/Card";
import { Humidity } from "../Humidity/Humidity";
import { Visibility } from "../Visibility/Visibility";
import { WindStatus } from "../WindStatus/WindStatus";
import styles from "./BodySection.module.css";

export const BodySection = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.buttons}>
            <button className={styles.celsius}>ºC</button>
            <button className={styles.fahrenheit}>ºF</button>
          </div>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <h1 className={styles.title_highlight}>Today highlights</h1>
          <div className={styles.highlights}>
            <WindStatus />
            <Humidity />
            <Visibility />
            <AirPressure />
          </div>
        </div>
        <div className={styles.created}>
          created by
          <strong>
            <a href="https://www.linkedin.com/in/lucas-canellas/">
              {" "}
              lucas-canellas{" "}
            </a>
          </strong>
          - devChallenges.io
        </div>
      </div>
    </>
  );
};
