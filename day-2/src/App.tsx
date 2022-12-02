import styles from "./App.module.css";

const gifts = [
  "Agarrar la pala como dev",
  "Que se termine el verano",
  "Aprender Rust sin esfuerzo",
];

function App() {
  return (
    <main className={styles.app}>
      <div className={styles.list_container}>
        <h1>Regalos</h1>
        <ul>
          {gifts.map((gift) => (
            <li key={new Date().getDate() * Math.random() * 1000}>{gift}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
