import React from "react";
import { PulseLoader } from "react-spinners";

import { useAuth } from "../store/context/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const { loading, signed } = useAuth();

  if (loading) {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <PulseLoader color="#666" />
      </div>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
