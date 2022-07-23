/* eslint-disable react-hooks/exhaustive-deps */
import { Sidebar } from "components/Sidebar";
import { useSideBarContext } from "context/SidebarContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Main } from "./Main";

export default function Layout() {
  const { isSidebarOpen, closeSidebar } = useSideBarContext();
  const location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={` flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Main>asdasdasa</Main>
      </div>
    </div>
  );
}
