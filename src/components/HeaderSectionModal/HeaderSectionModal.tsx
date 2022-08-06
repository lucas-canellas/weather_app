import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

import styles from "./HeaderSectionModal.module.css";

interface IHeaderSectionModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const HeaderSectionModal = ({
  isOpen,
  setIsOpen,
}: IHeaderSectionModalProps) => {
  const opacity = isOpen ? 1 : 0;
  const pointerEvents = isOpen ? "auto" : "none";
  const transform = isOpen ? "translateX(0)" : "translateX(-100%)";

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={styles.modal}
        style={{
          opacity: opacity,
          pointerEvents: pointerEvents,
          transform: transform,
        }}
        data-testid="modal"
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
