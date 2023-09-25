
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegsiterPage'
import NgoLoginPage from './pages/ngoLogin'
import NgoRegister from './pages/NgoRegisterPage'
import CreatePost from './pages/CreatePost'
import Layout from './pages/Layout'
import MissingPage from './pages/MissingPage'
import RequireNgo from './components/RequireNgo'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route exact index element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/ngoLogin" element={<NgoLoginPage />} />
          <Route exact path="/registerngo" element={<NgoRegister />} />

          {/* Private Routes */}
          <Route element={<RequireNgo />}>
            <Route exact path="/createblog" element={<CreatePost />} />
          </Route>

          {/* catch Undefined routes */}
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
  );
}

export default App
