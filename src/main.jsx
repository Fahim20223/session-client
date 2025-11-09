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
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import MyModels from "./Components/MyModels/MyModels.jsx";
import MyDownloads from "./Components/MyDownloads/MyDownloads.jsx";
// import MyModels from "./Components/MyModels/MyModels.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://3d-models-server-chi.vercel.app/latest-models"),
      },
      {
        path: "/all-models",
        loader: () => fetch("https://3d-models-server-chi.vercel.app/models"),
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

        element: (
          <PrivateRoute>
            <ModelDetails></ModelDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-model/:id",
        loader: ({ params }) =>
          fetch(`https://3d-models-server-chi.vercel.app/models/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateModel></UpdateModel>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-models",
        element: (
          <PrivateRoute>
            <MyModels></MyModels>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-downloads",
        element: (
          <PrivateRoute>
            <MyDownloads></MyDownloads>
          </PrivateRoute>
        ),
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
