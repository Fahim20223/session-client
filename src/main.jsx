import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayouts from "./Layouts/HomeLayouts.jsx";
import Home from "./Components/Home/Home.jsx";
import AllModels from "./Components/AllModels/AllModels.jsx";
import AddModels from "./Components/AddModels/AddModels.jsx";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";
import AuthProvider from "./Context/AuthProvidr.jsx";
import ModelDetails from "./Components/ModelDetails/ModelDetails.jsx";
import UpdateModel from "./Components/UpdateModel/UpdateModel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-models",
        loader: () => fetch("http://localhost:5000/models"),
        element: <AllModels></AllModels>,
      },
      {
        path: "/add-models",

        element: <AddModels></AddModels>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/model-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/models/${params.id}`),
        element: <ModelDetails></ModelDetails>,
      },
      {
        path: "/update-model/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/models/${params.id}`),
        element: <UpdateModel></UpdateModel>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);
