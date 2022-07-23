import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/tailwind.css";
import { App } from "./App";
import { SidebarProvider } from "context/SidebarContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);
