import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegsiterPage from './pages/RegsiterPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
// import store from './Store.js';
// import { Provider } from 'react-redux';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegsiterPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

);
  