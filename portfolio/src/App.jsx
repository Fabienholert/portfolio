import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Projet1 from "./pages/projet1/projet1.jsx";
import Projet2 from "./pages/projet2/projet2.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projet1" element={<Projet1 />} />
            <Route path="/projet2" element={<Projet2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
