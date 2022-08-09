import "react-toastify/dist/ReactToastify.css";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import styles from "./App.module.css";
import { BodySection } from "./components/BodySection/BodySection";
import { HeaderSection } from "./components/HeaderSection/HeaderSection";
import { api } from "./services/api";

export default function App() {
  const [city, setCity] = useState("itaborai");
  const notify = () =>
    toast.error("City ​​not found", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const { data, isFetching } = useQuery(
    ["weather", { city }],
    async () => {
      try {
        const response = await api.get(
          `/weather?q=${city}&appid=${import.meta.env.VITE_KEY}&units=metric`
        );
        return response.data;
      } catch (error) {
        notify();
        setCity("Itaborai");
      }
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: days, isFetching: isFetchingDays } = useQuery(
    ["5-days", { city }],
    async () => {
      const response = await api.get(
        `/forecast?q=${city}&appid=${import.meta.env.VITE_KEY}&units=metric`
      );
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    }
  );

  return (
    <>
      <main className={styles.main}>
        <ToastContainer />
        <HeaderSection data={data} isFetching={isFetching} setCity={setCity} />
        <BodySection
          data={data}
          isFetching={isFetching}
          days={days}
          isFetchingDays={isFetchingDays}
        />
      </main>
    </>
  );
}
