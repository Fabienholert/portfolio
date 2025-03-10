import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

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
