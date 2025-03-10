import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home/home";

export default function App() {
  return (
    <div className="App">
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
