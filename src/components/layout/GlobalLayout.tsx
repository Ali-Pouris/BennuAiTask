import { Outlet } from "react-router";

const GlobalLayout = () => {
  return (
    <div className="gradient-background h-screen w-screen">
      <Outlet />
    </div>
  );
};

export default GlobalLayout;
