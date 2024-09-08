import { Outlet } from "react-router-dom";
import Navbar from "./navbar.component";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-grow p-12">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
