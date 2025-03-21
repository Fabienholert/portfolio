import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Les routes enfants seront affichées ici */}
      </main>
      <Footer />
    </>
  );
}
