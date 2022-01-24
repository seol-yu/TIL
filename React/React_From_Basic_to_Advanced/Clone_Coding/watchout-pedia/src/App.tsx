import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import MovieDetail from "./pages/MovieDetail.tsx";
import TvPage from "./pages/TvPage.tsx";
import TvDetail from "./pages/TvDetail.tsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route path="/tv" element={<TvPage />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/tv/:id" element={<TvDetail />} />
          </Routes>
      </Router>
  );
}

export default App;
