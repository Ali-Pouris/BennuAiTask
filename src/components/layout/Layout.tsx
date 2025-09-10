import { Outlet } from "react-router";
import BottomNav from "./BottomNav";

const Layout = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-[calc(100%-96px-80px)] w-screen">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default Layout;
