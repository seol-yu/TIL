import React from "react";
import Container from "./Container";
import Counter from "./Counter";
// import "./App.css";
import MyHeader from "./MyHeader";

function App() {
  let name = "이설유";

  // 자식 컴포넌트에게 전달해야하는 prop들을 객체로

  const seolyuProps = {
    name: "설유",
    age: 1,
    // job: "worldClassDeveloper",
  };

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
    <Container>
      {/* 밑에 자식 요소는 Container 컴포넌트의 children이라는 prop으로 전달 */}
      <div style={style.App}>
        <MyHeader />
        {/* <Counter a={1} b={2} c={3} d={4} initialValue={5} /> */}
        <Counter {...seolyuProps} />
        <h2 style={style.h2}>
          안녕 {name} {1 + 2} {"Seolyu"} {func()}
        </h2>
        <b style={style.bold_text} id="bold_text">
          {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
      </div>
    </Container>
  );
}

export default App;
