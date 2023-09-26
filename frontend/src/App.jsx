
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
import RequireUser from './components/RequireUser'
import Profile from './pages/Profile/ProfilePage'
import ProtectRoutes from './components/ProtectRoutes'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import Gamespg from './pages/games/Gamespg'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route exact index element={<HomePage />} />

        {/* login protect Routes */}
        <Route element={<ProtectRoutes />}>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/ngoLogin" element={<NgoLoginPage />} />
          <Route exact path="/registerngo" element={<NgoRegister />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/games" element={<Gamespg />} />
        </Route>

        {/* Private Routes for Ngos */}
        <Route element={<RequireNgo />}>
          <Route exact path="/createblog" element={<CreatePost />} />
        </Route>

        {/* Private Routes for Users */}
        <Route element={<RequireUser />}>
          <Route exact path="/userprofile" element={<Profile />} />
        </Route>

        {/* catch Undefined routes */}
        <Route path="*" element={<MissingPage />} />
      </Route>
    </Routes>
  );
}

export default App
