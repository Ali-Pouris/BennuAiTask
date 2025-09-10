import { Navigate, Route, Routes } from "react-router";
import AuthPage from "../pages/auth/AuthPage";
import Layout from "../components/layout/Layout";
import ProtectedRoute from "./ProtectedRoute";
import GlobalLayout from "../components/layout/GlobalLayout";
import HomePage from "../pages/home/HomePage";
import ExamplePage from "../pages/ExamplePage";

const RouteList = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/car" element={<ExamplePage title={"Car"} />} />
            <Route path="/flag" element={<ExamplePage title={"Flag"} />} />
            <Route
              path="/gallery"
              element={<ExamplePage title={"Gallery"} />}
            />
            <Route path="/email" element={<ExamplePage title={"Email"} />} />
            <Route path="/golf" element={<ExamplePage title={"Golf"} />} />
            <Route
              path="/settings"
              element={<ExamplePage title={"Settings"} />}
            />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RouteList;
