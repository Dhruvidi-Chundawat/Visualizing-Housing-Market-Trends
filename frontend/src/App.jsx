import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Story from './pages/Story';
import Login from './pages/Login';

function Layout() {
  const location = useLocation();

  // Hide navbar on login page
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}