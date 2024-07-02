import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollButton from "../components/ScrollButton";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5">
        <Outlet />
      </div>
      <ScrollButton />
    </div>
  );
};

export default Layout;
