import { useState } from "react";
import styles from "./App.module.css";

const icons = ["candy-cane", "gift-box", "mistletoe-flower", "snowflake", "star"];

type Gift = String;

function App() {
  const [gifts, setGifts] = useState<Gift[]>([]);

  function addGift(event: React.FormEvent) {
    event.preventDefault();
    const { new_gift } = event.target as HTMLFormElement;
    const newGift = new_gift.value;

    setGifts((prevState) => [...prevState, newGift]);
    new_gift.value = "";
  }

  return (
    <main className={styles.app}>
      <section>
        <article>
          <h1>
            <span>Lista </span>
            <span>de </span>
            <span>regalos</span>
          </h1>
        </article>
        <article>
          <form onSubmit={addGift}>
            <label htmlFor="new_gift">Agrega un regalo</label>
            <input id="new_gift" type="text" />
            <button type="submit">Agregar!</button>
          </form>
          <ul>
            {gifts.length === 0 ? (
              <p>Probá agregar un regalo!</p>
            ) : (
              gifts.map((gift) => (
                <li key={Math.random() * 100 * new Date().getDate()}>
                  <img
                    aria-hidden
                    alt="Icon"
                    height="40px"
                    src={`public/icons/${icons[1]}.svg`}
                    width="40px"
                  />
                  <p>{gift}</p>
                </li>
              ))
            )}
          </ul>
        </article>
      </section>
    </main>
  );
}

export default App;
