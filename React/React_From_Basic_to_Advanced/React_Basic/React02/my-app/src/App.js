import logo from "./logo.svg";
import "./App.css";
import Composition from "./components/Props/Composition";
import Extraction from "./components/Props/Extraction/Extraction";

function App() {
  return (
    <div className="App">
      <Extraction />
      <Composition />
    </div>
  );
}

export default App;
