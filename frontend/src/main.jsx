import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContextProvider } from "./hooks/userContext.jsx";
import { AuthContextProvider } from "./hooks/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
