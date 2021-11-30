import logo from "./logo.svg";
// import "./App.css";
// import "./App.scss";
import styles from "./App.module.css";

import Button from "./components/Button";

// console.log(styles);
// {
//   App: "App_App__10Jyv"
//   App-logo-spin: "App_App-logo-spin__2-KCy"
//   header: "App_header__jcVeV"
//   link: "App_link__234FY"
//   logo: "App_logo__2pC6d"
// }

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className={styles["link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
