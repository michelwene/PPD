import { useState, createContext, useMemo } from "react";

interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const closeSiderbar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSiderbar,
      isDrawerOpen,
      toggleDrawer,
      closeDrawer,
      setIsDrawerOpen,
      isModalOpen,
      toggleModal,
      closeModal,
      isUpdate,
      setIsUpdate,
    }),
    [isSidebarOpen, isDrawerOpen, isModalOpen, isUpdate]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
