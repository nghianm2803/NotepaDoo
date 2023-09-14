import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequire() {
  console.log({ accessToken: localStorage.getItem("accessToken") });
  if (!localStorage.getItem("accessToken")) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
