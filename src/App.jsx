// Components
import Bar from "./components/Bar";
import FormAccount from "./components/FormAccount";
// Assets
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} shadow-xl`}>
        <div className={styles.bar}>
          <Bar />
        </div>
        <div className={styles.form}>
          <FormAccount />
        </div>
      </div>
    </div>
  );
}

export default App;
