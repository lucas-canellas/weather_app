import Skeleton from "@mui/material/Skeleton";

import styles from "./Humidity.module.css";

interface IWindStatusProps {
  data: any;
  isFetching: boolean;
}

export const Humidity = ({ data, isFetching }: IWindStatusProps) => {
  return (
    <>
      {isFetching ? (
        <Skeleton
          sx={{ bgcolor: "#1e213a" }}
          variant="rectangular"
          width={328}
          height={204}
        />
      ) : (
        <div className={styles.humidity}>
          <p className={styles.title}>Humidity</p>
          <p className={styles.value}>
            {data.main.humidity}
            <span>%</span>
          </p>
          {/* progress bar */}
          <div className={styles.percentage}>
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <div className={styles.progress_bar}>
            <div
              className={styles.progress_bar_fill}
              style={{ width: `${data.main.humidity}%` }}
            />
          </div>
          <div className={styles.percent_symbol}>
            <p>%</p>
          </div>
        </div>
      )}
    </>
  );
};
