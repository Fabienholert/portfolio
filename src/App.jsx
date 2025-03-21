import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout.jsx";
import Home from "./pages/Home/Home.jsx";

export default function App() {
  return (
    <div id="accueil" className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
