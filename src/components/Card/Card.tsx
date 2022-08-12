import { celsiusToFahrenheit } from "@/utils/convertTemp";
import { convertUnixToDate } from "@/utils/generateDate";

import styles from "./Card.module.css";

interface ICardProps {
  data: any;
  scale: string;
}

export const Card = ({ data, scale }: ICardProps) => {
  return (
    <div className={styles.card}>
      <h1>{convertUnixToDate(data.dt)}</h1>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt="Vasco"
      />
      <div className={styles.min_max}>
        <p className={styles.min}>
          {scale === "C"
            ? data.main.temp_max.toFixed()
            : celsiusToFahrenheit(data.main.temp_max).toFixed()}
          º{scale}
        </p>
        <p className={styles.max}>
          {scale === "C"
            ? data.main.temp_min.toFixed()
            : celsiusToFahrenheit(data.main.temp_min).toFixed()}
          º{scale}
        </p>
      </div>
    </div>
  );
};
