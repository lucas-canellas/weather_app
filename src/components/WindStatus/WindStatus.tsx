import NavigationIcon from "@mui/icons-material/Navigation";
import Skeleton from "@mui/material/Skeleton";

import styles from "./WindStatus.module.css";

interface IWindStatusProps {
  data: any;
  isFetching: boolean;
}

export const WindStatus = ({ data, isFetching }: IWindStatusProps) => {
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
        <div className={styles.wind_status}>
          <p className={styles.title}>Wind status</p>
          <p className={styles.value}>
            {data.wind.speed}
            <span>mph</span>
          </p>
          <div>
            <div
              className={styles.icon_navigation}
              style={{ transform: `rotate(${data.wind.deg}deg)` }}
            >
              <NavigationIcon className={styles.icon} />
            </div>
            {/* <p className={styles.direction_text}>WSW</p> */}
          </div>
        </div>
      )}
    </>
  );
};
