import {
  HomeOutlined,
  MailOutlined,
  CarOutlined,
  FlagOutlined,
  PictureOutlined,
  SettingOutlined,
  MoonOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import BottomNavItem from "./BottomNavItem";
import BottomNavButton from "./BottomNavButton";
import { useAuthStore } from "../../stores/authStore";

const BottomNav = () => {
  const { logout } = useAuthStore();

  return (
    <div className="mx-auto my-10 flex h-24 w-[800px] flex-row items-center justify-between rounded-3xl border border-white bg-white/20 px-8 text-gray-800 shadow-2xl backdrop-blur-2xl">
      <BottomNavItem to="/" title="Home Page" icon={<HomeOutlined />} />
      <BottomNavItem to="/email" title="Email Page" icon={<MailOutlined />} />
      <BottomNavItem to="/flag" title="Flag Page" icon={<CarOutlined />} />
      <BottomNavItem to="/golf" title="Golf Page" icon={<FlagOutlined />} />
      <BottomNavItem
        to="/gallery"
        title="Gallery Page"
        icon={<PictureOutlined />}
      />
      <BottomNavItem
        to="/settings"
        title="Settings Page"
        icon={<SettingOutlined />}
      />

      <div className="h-full w-[1px] bg-white"></div>

      <BottomNavButton title={"Change Theme"} icon={<MoonOutlined />} />
      <BottomNavButton
        title={"Log Out"}
        icon={<LogoutOutlined />}
        onClick={logout}
      />
    </div>
  );
};

export default BottomNav;
