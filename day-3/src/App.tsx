import styles from "./App.module.css";

function App() {
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
          <form>
            <label htmlFor="new_gift">Agrega un regalo</label>
            <input id="new_gift" type="text" />
            <button type="submit">Agregar!</button>
          </form>
          <ul>
            <li>
              <img
                alt=""
                height="40px"
                src="public/icons/christmas-mistletoe-flower.svg"
                width="40px"
              />
              <p>Regalo</p>
            </li>
            <li>
              <img alt="" height="40px" src="public/icons/christmas-snowflake.svg" width="40px" />
              <p>Regalo</p>
            </li>
            <li>
              <img alt="" height="40px" src="public/icons/christmas-star.svg" width="40px" />
              <p>Regalo</p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default App;
