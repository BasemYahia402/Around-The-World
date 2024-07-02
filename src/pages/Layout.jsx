import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container px-5 mx-auto md:px-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
