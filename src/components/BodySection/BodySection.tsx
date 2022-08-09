/* eslint-disable prettier/prettier */
import Skeleton from "@mui/material/Skeleton";

import { AirPressure } from "../AirPressure/AirPressure";
import { Card } from "../Card/Card";
import { Humidity } from "../Humidity/Humidity";
import { Visibility } from "../Visibility/Visibility";
import { WindStatus } from "../WindStatus/WindStatus";
import styles from "./BodySection.module.css";

interface IBodySectionProps {
  data: any;
  isFetching: boolean;
  days: any;
  isFetchingDays: boolean;
}

export const BodySection = ({
  data,
  isFetching,
  days,
  isFetchingDays,
}: IBodySectionProps) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.buttons}>
            <button className={styles.celsius}>ºC</button>
            <button className={styles.fahrenheit}>ºF</button>
          </div>
          <div className={styles.cards}>
            {isFetchingDays
              ? <>
                <Skeleton
                  sx={{ bgcolor: "#1e213a" }}
                  variant="rectangular"
                  width={120}
                  height={177}

                />
                <Skeleton
                  sx={{ bgcolor: "#1e213a" }}
                  variant="rectangular"
                  width={120}
                  height={177}

                />
                <Skeleton
                  sx={{ bgcolor: "#1e213a" }}
                  variant="rectangular"
                  width={120}
                  height={177}

                />
                <Skeleton
                  sx={{ bgcolor: "#1e213a" }}
                  variant="rectangular"
                  width={120}
                  height={177}

                />
                <Skeleton
                  sx={{ bgcolor: "#1e213a" }}
                  variant="rectangular"
                  width={120}
                  height={177}

                /></>
              : days.list
                .filter((item: any) => item.dt_txt.includes("12:00:00"))
                .map((item: any) => <Card key={item.dt} data={item} />)}
          </div>

          <h1 className={styles.title_highlight}>Today highlights</h1>
          <div className={styles.highlights}>
            <WindStatus data={data} isFetching={isFetching} />
            <Humidity data={data} isFetching={isFetching} />
            <Visibility data={data} isFetching={isFetching} />
            <AirPressure data={data} isFetching={isFetching} />
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
