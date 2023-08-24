import { Outlet } from "react-router-dom";
import MainNavigation from "../navigation/MainNavigation";
import Footer from "../landingpage/Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
