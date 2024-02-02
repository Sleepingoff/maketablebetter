import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Dashboard from "./router/Dashboard.tsx";
import HomePage from "./router/Home.tsx";
import SplashPage from "./router/SplashPage.tsx";
import GlobalStyles from "./style/reset.ts";

const router = createHashRouter([
  {
    path: "/",
    element: <SplashPage />,
    children: [],
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
