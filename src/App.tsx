import styles from "./App.module.css";
import { BodySection } from "./components/BodySection/BodySection";
import { HeaderSection } from "./components/HeaderSection/HeaderSection";

export default function App() {
  return (
    <>
      <main className={styles.main}>
        <HeaderSection />
        <BodySection />
      </main>
    </>
  );
}
