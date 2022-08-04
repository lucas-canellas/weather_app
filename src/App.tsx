import styles from "./App.module.css";
import { HeaderSection } from "./components/HeaderSection/HeaderSection";

export default function App() {
  return (
    <main className={styles.main}>
      <HeaderSection />
    </main>
  );
}
