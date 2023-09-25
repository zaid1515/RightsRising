
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Login/LoginPage'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/Login/RegsiterPage'
import NgoLoginPage from './pages/NgoLogin/ngoLogin'
import NgoRegister from './pages/NgoRegister/NgoRegisterPage'
import CreatePost from './pages/CreatePost'
import Layout from './pages/Layout'
import MissingPage from './pages/MissingPage'
import RequireNgo from './components/RequireNgo'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          {/* <Route exact index element={<HomePage />} /> */}
          <Route exact path="/login" element={<LoginPage />} />
          {/* <Route exact path="/register" element={<RegisterPage />} /> */}
          {/* <Route exact path="/ngoLogin" element={<NgoLoginPage />} /> */}
          {/* <Route exact path="/registerngo" element={<NgoRegister />} /> */}

          {/* Private Routes */}
          {/* <Route element={<RequireNgo />}> */}
            
            {/* <Route exact path="/createblog" element={<CreatePost />} /> */}
          {/* </Route> */}

          {/* catch Undefined routes */}
          {/* <Route path="*" element={<MissingPage />} /> */}
        </Route>
      </Routes>
  );
}

export default App
