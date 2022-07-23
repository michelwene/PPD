import AccessibleNavigationAnnouncer from "components/AccessibleNavigationAnnouncer";
import { SidebarContext } from "context/SidebarContext";
import { lazy } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = lazy(() => import("layout/Layout"));

export function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <AccessibleNavigationAnnouncer />
        <Route path="/login" element={"adssdas"} />
        <Route path="/signup" element={"adsasdas"} />
        <Route path="/forgot-password" element={"adsasdas"} />
        <Route path="/reset-password/:token" element={"adsasdas"} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}
