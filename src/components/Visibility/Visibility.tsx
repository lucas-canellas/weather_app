import Skeleton from "@mui/material/Skeleton";

import styles from "./Visibility.module.css";

interface IWindStatusProps {
  data: any;
  isFetching: boolean;
}

export const Visibility = ({ data, isFetching }: IWindStatusProps) => {
  const meterToMiles = (meter: number) => {
    return meter * 0.000621371;
  };
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
        <div className={styles.visibility}>
          <h1 className={styles.title}>Visibility</h1>
          <p className={styles.value}>
            {meterToMiles(data.visibility).toFixed(2)} <span>miles</span>
          </p>
        </div>
      )}
    </>
  );
};
