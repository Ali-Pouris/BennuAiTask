import { Tooltip } from "antd";
import { NavLink } from "react-router";

type BottomNavItemProps = {
  to: string;
  title: string;
  icon: React.ReactNode;
};

const BottomNavItem = ({ to, title, icon }: BottomNavItemProps) => {
  return (
    <Tooltip title={title}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex h-18 w-18 items-center justify-center rounded-full text-3xl outline-2 -outline-offset-8 outline-white transition-all duration-300 ease-in-out hover:scale-105 hover:outline-gray-500 ${isActive ? "bg-white text-gray-800 outline-white hover:outline-gray-500" : "bg-white/20 text-white outline-white/0 hover:outline-white"}`
        }
      >
        {icon}
      </NavLink>
    </Tooltip>
  );
};

export default BottomNavItem;
