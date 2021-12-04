import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { addTodo } from "./redux/actions";

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store);

store.dispatch(addTodo("coding"));
store.dispatch(addTodo("seolyu"));
store.dispatch(addTodo("developer"));
unsubscribe();
store.dispatch(addTodo("coding"));
store.dispatch(addTodo("seolyu"));
store.dispatch(addTodo("developer"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
