import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import English from "./pages/English";
import Korean from "./pages/Korean";
import "antd/dist/antd.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "en", element: <English /> },
        { path: "kr", element: <Korean /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_NAME }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
