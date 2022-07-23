import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/tailwind.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "context/SidebarContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </React.StrictMode>
);
