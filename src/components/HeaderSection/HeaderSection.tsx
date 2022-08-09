import CloseIcon from "@mui/icons-material/Close";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

import { convertUnixToDate } from "@/utils/generateDate";

import styles from "./HeaderSection.module.css";

interface IHeaderSectionProps {
  data: any;
  isFetching: boolean;
  setCity: (city: string) => void;
  history: string[];
}

export const HeaderSection = ({
  data,
  isFetching,
  setCity,
  history,
}: IHeaderSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const opacity = isOpen ? 1 : 0;
  const pointerEvents = isOpen ? "auto" : "none";
  const transform = isOpen ? "translateX(0)" : "translateX(-100%)";

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === "Escape" && setIsOpen(false);
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(inputValue);
    setIsOpen(false);
    setInputValue("");
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.search_location}>
          <button
            data-testid="open_modal"
            className={styles.open_search}
            onClick={() => setIsOpen(true)}
          >
            Search for places
          </button>
          <button className={styles.location}>
            <GpsFixedIcon />
          </button>
        </div>
        <div className={styles.bg_cloud}>
          {isFetching ? (
            <Skeleton />
          ) : (
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              alt="Test Temp"
            />
          )}
        </div>
        <div className={styles.weather_info}>
          <p className={styles.degree}>
            {isFetching ? "??" : data.main.temp.toFixed(0)}
            <span>ºC</span>
          </p>
          <p className={styles.weather}>
            {isFetching ? "Loading" : data.weather[0].main}
          </p>
          <p className={styles.day}>
            Today • {isFetching ? "Loading" : convertUnixToDate(data.dt)}
          </p>
          <div className={styles.city}>
            <LocationOnIcon />
            <p>{isFetching ? "Loading" : data.name}</p>
          </div>
        </div>
      </div>

      {/* Modal */}

      <div
        className={styles.modal}
        style={{
          opacity: opacity,
          pointerEvents: pointerEvents,
          transform: transform,
        }}
        data-testid="modal"
        aria-hidden={!isOpen}
      >
        <button
          data-testid="close_modal"
          className={styles.close}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </button>
        <form onSubmit={onSubmit}>
          <div className={styles.search}>
            <div className={styles.icon_input}>
              <SearchIcon />
            </div>
            <input
              className={styles.input_search}
              type="text"
              placeholder="search location"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <button className={styles.btn_search}>Search</button>
          </div>
        </form>

        <div className={styles.items}>
          {history
            .filter((item, index) => history.indexOf(item) === index)
            .map((item, index) => (
              <div
                key={index}
                role="button"
                className={styles.item_history}
                aria-hidden="true"
                onClick={() => {
                  setCity(item);
                  setIsOpen(false);
                }}
              >
                <p>{item}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
