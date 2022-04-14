import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
