
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Login/LoginPage'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/Login/RegsiterPage'
import NgoLoginPage from './pages/NgoLogin/ngoLogin'
import NgoRegister from './pages/NgoRegister/NgoRegisterPage'
import CreatePost from './pages/CreatePost'
import Layout from './pages/Layout'
import MissingPage from './pages/MissingPage'
import Profile from './pages/Profile/ProfilePage'
// import ProtectRoutes from './components/ProtectRoutes'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import Gamespg from './pages/games/Gamespg'
import Chat from './pages/Chat/Chat'
import Events from './pages/Eventpg/Event'
import Modules from './pages/Videospg/Videos'
import Webinar from './pages/Webinar/Webinar'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route exact index element={<HomePage />} />

        {/* login protect Routes */}

          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/ngoLogin" element={<NgoLoginPage />} />
          <Route exact path="/registerngo" element={<NgoRegister />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/games" element={<Gamespg />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/event" element={<Events />} />
          <Route exact path="/modules" element={<Modules />} />
          <Route exact path="/webinar" element={<Webinar />} />

        {/* Private Routes for Ngos */}
          <Route exact path="/createblog" element={<CreatePost />} />
        

        {/* Private Routes for Users */}
          <Route exact path="/userprofile" element={<Profile />} />

        {/* catch Undefined routes */}
        <Route path="*" element={<MissingPage />} />
      </Route>
    </Routes>
  );
}

export default App
