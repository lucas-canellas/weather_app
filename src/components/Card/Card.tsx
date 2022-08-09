import { convertUnixToDate } from "@/utils/generateDate";

import styles from "./Card.module.css";

interface ICardProps {
  data: any;
}

export const Card = ({ data }: ICardProps) => {
  return (
    <div className={styles.card}>
      <h1>{convertUnixToDate(data.dt)}</h1>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt="Vasco"
      />
      <div className={styles.min_max}>
        <p className={styles.min}> {data.main.temp_max.toFixed()}ºC</p>
        <p className={styles.max}> {data.main.temp_min.toFixed()}ºC</p>
      </div>
    </div>
  );
};
