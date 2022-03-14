import logo from "./logo.svg";
import "./App.css";
import Composition from "./components/Props/Composition";
import Extraction from "./components/Props/Extraction/Extraction";
import ClassComponent from "./components/Props/State/ClassComponent";
import FunctionalComponent from "./components/Props/State/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
      <Extraction />
      <Composition />
    </div>
  );
}

export default App;
