import { UserContext, UserContextProvider } from './userContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegsiterPage'
import NgoLoginPage from './pages/ngoLogin'
import NgoRegister from './pages/NgoRegisterPage'
import { useContext, useEffect } from 'react'
import CreatePost from './pages/CreatePost'
import axios from 'axios'
import Layout from './pages/Layout'

function App() {
  // const { userInfo } = useContext(UserContext);
  
      const { userInfo, setUserInfo } = useContext(UserContext);

      const getState = async () => {
        try {
          const response = await axios.get("http://localhost:3000/", {
            withCredentials: true,
          });
          console.log('from getstate respones',response.data);
          setUserInfo(response.data);
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        getState();
      }, []);

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
              <Route exact index element={<HomePage />} />
              <Route exact path='/login' element={<LoginPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
              <Route exact path="/ngoLogin" element={<NgoLoginPage />} />
              <Route exact path="/registerngo" element={<NgoRegister />} />
              <Route exact path="/createblog" element={<CreatePost />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App
