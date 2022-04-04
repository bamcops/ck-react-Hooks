import "./App.css";
import Search from "./Component/Search";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Component/Home";
import Error from "./Component/Error";
import { Button } from "react-bootstrap";
import Trailer from "./Component/Trailer";
function App() {
  return (
    <div className="App">
      <h1> GO-TO-FLIX</h1>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/movies">
        <Button>movies</Button>
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/trailer/:id" element={<Trailer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
