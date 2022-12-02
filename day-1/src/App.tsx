import { useState } from "react";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.app}>
      <h1>Regalos</h1>
      <ul>
        <li>Agarrar la pala como dev</li>
        <li>Que se termine el verano</li>
        <li>Aprender Rust sin esfuerzo</li>
      </ul>
    </main>
  );
}

export default App;
