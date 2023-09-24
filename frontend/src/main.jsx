  import React, { useContext } from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App.jsx";
  import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
  import "bootstrap/dist/css/bootstrap.min.css";
import { UserContextProvider } from "./userContext.jsx";
  // import "./index.css";
  // import HomePage from "./pages/HomePage.jsx";
  // import LoginPage from "./pages/LoginPage.jsx";
  // import RegsiterPage from "./pages/RegsiterPage.jsx";
  // import ProfilePage from "./pages/ProfilePage.jsx";
  // import NgoRgister from "./pages/NgoRegisterPage.jsx";
  // import NgoLoginPage from "./pages/ngoLogin.jsx";
  // import { UserContext, UserContextProvider } from "./userContext.jsx";
  // import CreatePost from "./pages/CreatePost.jsx";


  // const AppRoutes = () => {
  //   const { userInfo, setUserInfo } = useContext(UserContext);

  //   const protectedRoutes = userInfo ? (
  //     <>
  //       <Route exact path="/profile" element={<ProfilePage />} />
  //       <Route exact path="/createpost" element={<CreatePost />} />
  //     </>
  //   ) : null;

  //   return(
  //     <UserContextProvider>
  //       <RouterProvider>
  //         createBrowserRouter(
  //           createRoutesFromElements(
  //             <Route path="/" 
  //               element={
  //                   <App />
  //               }
  //             >
  //               <Route index path="/" element={<HomePage />}/>
  //               <Route exact path="/login" element={<LoginPage />} />
  //               <Route exact path="/register" element={<RegsiterPage />} />
  //               <Route exact path="/registerngo" element={<NgoRgister />} />
  //               <Route exact path="/ngologin" element={<NgoLoginPage />} />
  //               {/* <ProtectedRoute exact path="/profile" element={<ProfilePage />} />
  //               <ProtectedRoute exact path="/createpost" element={<CreatePost />} /> */}
  //               {protectedRoutes}
  //             </Route>
  //           )
  //         )
  //       </RouterProvider>
  //     </UserContextProvider>
  //   )
  // }

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </React.StrictMode>
  );
