import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import GoogleAuth from "./components/GoogleAuth.jsx";
import PracRegister from "./components/PracRegister.jsx";
import PracLogin from "./components/PracLogin.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
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
            path: "/googleAuth",
            element: <GoogleAuth></GoogleAuth>,
         },
         {
            path: "/pracRegister",
            element: <PracRegister></PracRegister>,
         },
         {
            path: "/pracLogin",
            element: <PracLogin></PracLogin>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
   </React.StrictMode>
);
