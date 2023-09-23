import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegsiterPage from "./pages/RegsiterPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import NgoRgister from "./pages/NgoRegisterPage.jsx";
import NgoLoginPage from "./pages/ngoLogin.jsx";
import { UserContextProvider } from "./userContext.jsx";
import CreatePost from "./pages/CreatePost.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" 
        element={
          <UserContextProvider>
            <App />
          </UserContextProvider>
        }
      >
        <Route index path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegsiterPage />} />
        <Route exact path="/registerngo" element={<NgoRgister />} />
        <Route exact path="/ngologin" element={<NgoLoginPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/createpost" element={<CreatePost />} />
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
