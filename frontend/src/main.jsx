import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter
} from "react-router-dom";
import { AuthContextProvider } from "./hooks/authContext.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
