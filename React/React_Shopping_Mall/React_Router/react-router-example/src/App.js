import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/profile/:id" exact component={Profile} />
    </BrowserRouter>
  );
}

export default App;
