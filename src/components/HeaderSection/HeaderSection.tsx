import CloseIcon from "@mui/icons-material/Close";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

import imgTest from "../../assets/WeatherTemp.png";
import styles from "./HeaderSection.module.css";

export const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <img src={imgTest} alt="Test Temp" />
        </div>
        <div className={styles.weather_info}>
          <p className={styles.degree}>
            15<span>ºC</span>
          </p>
          <p className={styles.weather}>Shower</p>
          <p className={styles.day}>Today • Fri, 5 Jun</p>
          <div className={styles.city}>
            <LocationOnIcon />
            <p>Helsinki</p>
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
        <div className={styles.search}>
          <div className={styles.icon_input}>
            <SearchIcon />
          </div>
          <input
            className={styles.input_search}
            type="text"
            placeholder="search location"
          />
          <button className={styles.btn_search}>Search</button>
        </div>
      </div>
    </>
  );
};
