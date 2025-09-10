import { useEffect } from "react";
import Examples from "./components/Examples";
import MainAuthCard from "./components/MainAuthCard";
import { useAuthStore } from "../../stores/authStore";
import { useNavigate } from "react-router";

const AuthPage = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Examples />
      <MainAuthCard />
    </div>
  );
};

export default AuthPage;
