import Skeleton from "@mui/material/Skeleton";

import styles from "./AirPressure.module.css";

interface IWindStatusProps {
  data: any;
  isFetching: boolean;
}

export const AirPressure = ({ data, isFetching }: IWindStatusProps) => {
  return (
    <>
      {isFetching ? (
        <Skeleton
          sx={{ bgcolor: "#1e213a" }}
          variant="rectangular"
          width={328}
          height={160}
        />
      ) : (
        <div className={styles.air_pressure}>
          <h1 className={styles.title}>AirPressure</h1>
          <p className={styles.value}>
            {data.main.pressure} <span>mb</span>
          </p>
        </div>
      )}
    </>
  );
};
