import { Outlet, Navigate } from "react-router-dom";
import MyHeader from "./MyHeader";

export default function Layout() {
  const isAuthenticated = localStorage.getItem("token"); // Example check

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col w-full h-screen">
      <MyHeader />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
}
