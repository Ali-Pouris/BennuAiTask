import { Tooltip } from "antd";

type BottomNavButtonProps = {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

const BottomNavButton = ({ title, icon, onClick }: BottomNavButtonProps) => {
  return (
    <Tooltip title={title}>
      <button
        onClick={onClick}
        className="flex h-18 w-18 cursor-pointer items-center justify-center rounded-full bg-white text-3xl outline-2 -outline-offset-8 outline-white transition-all duration-300 ease-in-out hover:scale-105 hover:outline-gray-500"
      >
        {icon}
      </button>
    </Tooltip>
  );
};

export default BottomNavButton;
