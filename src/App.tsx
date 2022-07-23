import AccessibleNavigationAnnouncer from "components/AccessibleNavigationAnnouncer";
import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
        <Route path="/" element={"adsasdas"} />
      </Routes>
    </>
  );
}
