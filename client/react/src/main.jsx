import {React, StrictMode} from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Projects from "./pages/Projects.jsx";

import App from "./App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Homepage />} />
      <Route path="projects" element={<Projects />} />
    </Route>
      
  )
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);