import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AsideLeft from "../components/AsideLeft";

function MainLayout() {
  return (
    <div className="pt-[120px]">
      <Navbar />
      <AsideLeft />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
