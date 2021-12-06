import React from "react";
import Counter from "./Counter";
// import "./App.css";
import MyHeader from "./MyHeader";

function App() {
  let name = "이설유";

  const style = {
    App: {
      backgroundColor: "yellow",
    },
    h2: {
      color: "palevioletred",
    },
    bold_text: {
      color: "green",
    },
  };

  const func = () => {
    return "Developer";
  };

  const number = 120;

  return (
    <div style={style.App}>
      <MyHeader />
      <Counter />
      <h2 style={style.h2}>
        안녕 {name} {1 + 2} {"Seolyu"} {func()}
      </h2>
      <b style={style.bold_text} id="bold_text">
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
    </div>
  );
}

export default App;
